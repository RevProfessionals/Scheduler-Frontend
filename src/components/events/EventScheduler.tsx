import React, { useState } from 'react';

const EventScheduler: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [newEvent, setNewEvent] = useState({
    id: 1,
    title: '',
    date: '',
    time: '',
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, title: event.target.value });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    setNewEvent({ ...newEvent, date: event.target.value });
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, time: event.target.value });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, newEvent]);
      setNewEvent({ ...newEvent, id: newEvent.id + 1, title: '', date: '', time: '' });
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
          <label>Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={styles.input}
        />
        </div>
        <div style={styles.inputColumn}>
          <label>Time:</label>
        <input
          type="time"
          value={newEvent.time}
          onChange={handleTimeChange}
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
              <strong>Date:</strong> {event.date}
            </div>
            <div style={styles.column}>
              <strong>Time:</strong> {event.time}
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
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
};

export default EventScheduler;
