import React from 'react';
import { Card } from './card';

export const Services = () => {
  return (
    <div className="container mx-auto  min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card 
        title="Email Management"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['Flagging Emails', 'Clearing Spam', 'Replying to Emails']}
      /> 
      <Card 
        title="General Administration"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['Data Entry', 'Excel', 'Appointment Setting', 'Research', 'Typing', 'Proof Reading']}
      />
      <Card 
        title="Calender"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['Email Remainders', 'Create Meeting Agendas', 'Organizing Meetings', 'Booking Appointments']}
      />
      <Card 
        title="Travel Management"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['Flights Bookings', 'Accommodation', 'Car Rentals & Transfers', 'Visa & Travel Insurance Assistance', 'Personalized Itineraries & Trip Planning', 'Business Trip Scheduling & Expense Tracking']}
      /> 
      <Card 
        title="Event Management"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['Corporate, Workshop', 'Conferencing', 'Meeting & Social Event Planning', 'Location Scouting', 'Budgeting', 'Point of contact']}
      />
      <Card 
        title="Other"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['Online Shopping and Sourcing', 'Sending Thank You Cards', 'Paying Bills', 'Running/Managing Competitions', 'Lifestyle management', 'Website Design & Administration']}
      />
      </div>

    </div>
  )};
