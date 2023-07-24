// src/components/EventCreationForm.tsx

import React, { useState } from 'react';
import { Event, Day } from '../types';

interface EventCreationFormProps {
  onEventCreated: (event: Event, date: string) => void;
}

const EventCreationForm: React.FC<EventCreationFormProps> = ({ onEventCreated }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newEvent: Event = {
      id: Date.now(), // Just for demonstration, use a proper ID generation method in real projects
      title,
      time,
    };
    onEventCreated(newEvent, date);
    setTitle('');
    setTime('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Time:
        <input type="text" value={time} onChange={handleTimeChange} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventCreationForm;
