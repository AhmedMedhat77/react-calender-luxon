import type { CalendarEvent } from "../types/calendar";

interface EventItemProps {
  event: CalendarEvent;
  onDelete: (id: string) => void;
}

export function EventItem({ event, onDelete }: EventItemProps) {
  return (
    <div className="event-item">
      <span
        className="event-color-bar"
        style={{ backgroundColor: event.color }}
      />
      <span className="event-title">{event.title}</span>
      <button
        className="event-delete"
        onClick={() => onDelete(event.id)}
        aria-label="Delete event"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
