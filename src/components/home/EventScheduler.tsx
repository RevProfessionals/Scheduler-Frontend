import React, { useState } from 'react';
import { Event } from './types';

const EventScheduler: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [newEvent, setNewEvent] = useState<Event>({
    id: 1,
    title: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, title: event.target.value });
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, startDate: event.target.value });
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, endDate: event.target.value });
  };

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, startTime: event.target.value });
  };
 
  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, endTime: event.target.value });
  };
 

  const handleAddEvent = () => {
    if (
      newEvent.title &&
      newEvent.startDate &&
      newEvent.endDate &&
      newEvent.startTime &&
      newEvent.endTime
    ) {
      setEvents([...events, newEvent]);
      setNewEvent({
        ...newEvent,
        id: newEvent.id + 1,
        title: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Event Scheduler</h1>
      <div style={styles.eventForm}>
      <div style={styles.inputColumn}>
          <label>Text:</label>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleTitleChange}
          style={styles.input}
        />
        </div>
        <div style={styles.inputColumn}>
          <label>Start Date:</label>
        <input
          type="date"
          value={newEvent.startDate}
          onChange={handleStartDateChange}
          style={styles.input}
        />
        </div>
        <div style={styles.inputColumn}>
          <label>End Date:</label>
          <input
          type="date"
          value={newEvent.endDate}
          onChange={handleEndDateChange}
          style={styles.input}
        />
        </div>
        <div style={styles.inputColumn}>
          <label>Start Time:</label>
        <input
          type="time"
          value={newEvent.startTime}
          onChange={handleStartTimeChange}
          style={styles.input}
        />
        </div>
        <div style={styles.inputColumn}>
          <label>End Time:</label>
          <input
          type="time"
          value={newEvent.endTime}
          onChange={handleEndTimeChange}
          style={styles.input}
        />
        </div>
        <button onClick={handleAddEvent} style={styles.addButton}>
          Add Event
        </button>
      </div>
      <div style={styles.eventsList}>
        <h2>Events for the Day</h2>
        {events.map((event) => (
          <div key={event.id} style={styles.eventItem}>
            <div style={styles.column}>
              <strong>Title:</strong> {event.title}
            </div>
            <div style={styles.column}>
              <strong>Start Date:</strong> {event.startDate}
            </div>
            <div style={styles.column}>
              <strong>End Date:</strong> {event.endDate}
            </div>
            <div style={styles.column}>
              <strong>Start Time:</strong> {event.startTime}
            </div>
            <div style={styles.column}>
              <strong>End Time:</strong> {event.endTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center", 
    height: "100%"
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  eventForm: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '20px',
  },
  inputColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '5px',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  eventsList: {
    marginTop: '20px',
  },
  eventItem: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  //inputContainer: {
    //display: 'flex',
    //alignItems: 'center',
    //gap: '5px',
  //},
};

export default EventScheduler;
