// src/components/EventItem.tsx

import React from 'react';
import { Event } from '../types';

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div>
      <strong>{event.title}</strong> - {event.time}
    </div>
  );
};

export default EventItem;
