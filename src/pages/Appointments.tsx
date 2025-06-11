import React from 'react';
import AppointmentHero from '../components/appointments/AppointmentHero';
import AppointmentCalendar from '../components/appointments/AppointmentCalendar';
import AppointmentFaq from '../components/appointments/AppointmentFaq';

const Appointments: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <AppointmentHero />
      <AppointmentCalendar />
      <AppointmentFaq />
    </div>
  );
};

export default Appointments;