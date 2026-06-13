import type { CalendarEvent } from "../types/calendar";
import classnames from "classnames";

interface EventItemProps {
  event: CalendarEvent;
  onDelete: (id: string) => void;
  onToggleDone: (id: string) => void;
}

export function EventItem({ event, onDelete, onToggleDone }: EventItemProps) {
  return (
    <div className={classnames("event-item", { "event-item--done": event.done })}>
      <button
        className="event-checkbox"
        onClick={() => onToggleDone(event.id)}
        aria-label={event.done ? "Mark as not done" : "Mark as done"}
      >
        {event.done && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
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
