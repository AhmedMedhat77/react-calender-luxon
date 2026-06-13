import { useState } from "react";
import { DateTime } from "luxon";
import type { CalendarEvent, EventColor } from "../types/calendar";
import { EventItem } from "./EventItem";
import { EventForm } from "./EventForm";

interface EventsPanelProps {
  selectedDay: DateTime;
  eventsForDay: CalendarEvent[];
  onAddEvent: (title: string, color: EventColor) => void;
  onDeleteEvent: (id: string) => void;
  randomColor: () => EventColor;
}

export function EventsPanel({
  selectedDay,
  eventsForDay,
  onAddEvent,
  onDeleteEvent,
  randomColor,
}: EventsPanelProps) {
  const [showForm, setShowForm] = useState(false);

  const handleSave = (title: string, color: EventColor) => {
    onAddEvent(title, color);
    setShowForm(false);
  };

  return (
    <div className="events-panel">
      <div className="events-panel-header">
        <div className="events-panel-date">
          <span className="events-panel-day-name">
            {selectedDay.weekdayLong}
          </span>
          <span className="events-panel-day-num">
            {selectedDay.monthShort} {selectedDay.day}, {selectedDay.year}
          </span>
        </div>
        <button className="add-event-btn" onClick={() => setShowForm(true)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Event
        </button>
      </div>

      {showForm && (
        <EventForm
          initialColor={randomColor()}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="events-list">
        {eventsForDay.length === 0 && !showForm && (
          <div className="no-events">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="no-events-icon"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>No events for this day</span>
          </div>
        )}
        {eventsForDay.map((event) => (
          <EventItem key={event.id} event={event} onDelete={onDeleteEvent} />
        ))}
      </div>
    </div>
  );
}
