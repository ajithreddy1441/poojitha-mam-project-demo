import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, CheckCircle } from 'lucide-react';
import { ref, push } from 'firebase/database'; // Import ref and push from firebase/database
import { database } from '@/firebaseConfig'; // Adjust the path as needed based on your actual file location
import emailjs from 'emailjs-com'; // Import emailjs-com

// You might not have useToast in this project, if not, remove it or integrate a similar notification system
// import { useToast } from '@/hooks/use-toast'; // Assuming you might want this for notifications

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface FormData {
  date: Date | null;
  timeSlot: string | null; // This will store the ID of the selected time slot
  name: string;
  email: string;
  phone: string;
  message: string;
}

const AppointmentCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null); // Stores the ID
  const [formData, setFormData] = useState<FormData>({ date: null, timeSlot: null, name: '', email: '', phone: '', message: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- EmailJS Configuration ---

  // It's highly recommended to store these in environment variables (e.g., .env.local).
  const EMAILJS_SERVICE_ID = 'service_c6iagy4'; // Your EmailJS Service ID
  const EMAILJS_USER_TEMPLATE_ID = 'template_kfm2hkl'; // Your EmailJS Template ID for the client/user
  const EMAILJS_ADMIN_TEMPLATE_ID = 'template_62rfuar'; // Your EmailJS Template ID for the admin
  const EMAILJS_PUBLIC_KEY = 'VGvXCasUcQd32Cx8d'; // Your EmailJS Public Key (User ID)
  // --- End EmailJS Configuration ---

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = Array(new Date(year, month, 1).getDay()).fill(null);
    while (date.getMonth() === month) days.push(new Date(date)), date.setDate(date.getDate() + 1);
    return days;
  };

  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '1:00 PM', available: true },
    { id: '5', time: '2:00 PM', available: true },
    { id: '6', time: '3:00 PM', available: true },
    { id: '7', time: '4:00 PM', available: false },
    { id: '8', time: '5:00 PM', available: true },
  ];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => (setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)), setSelectedDate(null), setSelectedTimeSlot(null));
  const nextMonth = () => (setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)), setSelectedDate(null), setSelectedTimeSlot(null));

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setFormData(prev => ({ ...prev, date, timeSlot: null }));
  };

  const handleTimeSlotClick = (slotId: string) => {
    setSelectedTimeSlot(slotId);
    setFormData(prev => ({ ...prev, timeSlot: slotId }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (!selectedDate || !selectedTimeSlot || !formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields (Date, Time, Name, Email, Phone).');
      setIsSubmitting(false);
      return;
    }

    const selectedSlot = timeSlots.find(slot => slot.id === selectedTimeSlot);
    const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = selectedSlot ? selectedSlot.time : 'N/A';

    // Prepare data for Firebase
    const appointmentData = {
      date: selectedDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD for Firebase
      timeSlot: formattedTime, // Store the time string in Firebase
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      timestamp: new Date().toISOString(), // Add a timestamp for when the appointment was booked
    };

    try {
      // 1. Push the appointment data to Firebase
      await push(ref(database, 'appointments'), appointmentData);

      // 2. Send Emails via EmailJS
      const templateParams = {
        from_name: formData.name, // Matches your EmailJS template placeholder
        from_email: formData.email, // Matches your EmailJS template placeholder
        to_email: formData.email, // For client email
        admin_email: 'your_admin_email@example.com', // Replace with your actual admin email
        phone: formData.phone,
        appointment_date: formattedDate,
        appointment_time: formattedTime,
        message: formData.message, // Your concerns/message field
      };

      // Send email to client
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
        console.log('Client confirmation email sent successfully!');
      } catch (emailError) {
        console.error('Failed to send client confirmation email:', emailError);
        // You might want to log this but still proceed with the success message
        // since the Firebase booking was successful.
      }

      // Send email to admin
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
        console.log('Admin notification email sent successfully!');
      } catch (emailError) {
        console.error('Failed to send admin notification email:', emailError);
        // Same as above, log but don't prevent success message if Firebase was okay.
      }

      setShowConfirmation(true);
      resetForm(); // Reset form fields after successful submission and email attempts

    } catch (err) {
      setError('Failed to book appointment. Please try again.');
      console.error('Error booking appointment to Firebase:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate date comparison
    return date < today;
  };

  const resetForm = () => {
    setShowConfirmation(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setFormData({ date: null, timeSlot: null, name: '', email: '', phone: '', message: '' });
    setError(null);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {showConfirmation ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Scheduled!</h2>
              <p className="text-gray-600 mb-6">
                Your appointment has been booked for {selectedDate?.toLocaleDateString()} at {timeSlots.find(slot => slot.id === selectedTimeSlot)?.time}.
                A confirmation email has been sent to you.
              </p>
              <button onClick={resetForm} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                Book Another Appointment
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-7/12 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Select a Date</h2>
                  <div className="flex space-x-2 items-center">
                    <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    <div className="font-medium">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
                    <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {weekdays.map(day => <div key={day} className="text-center text-sm font-medium text-gray-500">{day}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, i) => (
                    <div key={i} className="aspect-square">
                      {day ? (
                        <button
                          onClick={() => handleDateClick(day)}
                          disabled={isPastDate(day)}
                          className={`w-full h-full flex items-center justify-center rounded-full text-sm
                            ${isPastDate(day) ? 'text-gray-300 cursor-not-allowed' :
                              selectedDate?.getTime() === day.getTime() ? 'bg-green-600 text-white' :
                              isToday(day) ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100 text-gray-700'}`}
                        >
                          {day.getDate()}
                        </button>
                      ) : <div className="w-full h-full" />}
                    </div>
                  ))}
                </div>

                {selectedDate && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Available Times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {timeSlots.map(slot => (
                        <button
                          key={slot.id}
                          onClick={() => slot.available && handleTimeSlotClick(slot.id)}
                          disabled={!slot.available}
                          className={`p-3 rounded-lg flex items-center justify-center text-sm
                            ${!slot.available ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                              selectedTimeSlot === slot.id ? 'bg-green-600 text-white' :
                              'bg-white border border-gray-200 hover:border-green-500 text-gray-700'}`}
                        >
                          <Clock className="h-4 w-4 mr-2" /> {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:w-5/12 bg-gray-50 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Information</h2>
                {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description of Your Nutrition Goals</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Tell us briefly about your nutrition goals or concerns..." />
                  </div>

                  <button type="submit" disabled={!selectedDate || !selectedTimeSlot || !formData.name || !formData.email || !formData.phone || isSubmitting}
                    className={`w-full mt-6 py-3 rounded-lg font-medium ${
                      !selectedDate || !selectedTimeSlot || !formData.name || !formData.email || !formData.phone || isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
                    } transition-colors duration-300`}
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentCalendar;