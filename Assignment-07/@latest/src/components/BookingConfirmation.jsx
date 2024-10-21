import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { name, email, mobile, movieId } = location.state || {};

  const generateBookingId = () => {
    return 'BOOK' + Math.floor(Math.random() * 10000);
  };

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Booking ID: {generateBookingId()}</p>
      <p>Movie ID: {movieId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
