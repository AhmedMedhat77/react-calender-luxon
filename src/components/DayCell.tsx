import classnames from "classnames";
import { DateTime } from "luxon";
import type { CalendarEvent } from "../types/calendar";

interface DayCellProps {
  day: DateTime;
  isOtherMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: CalendarEvent[];
  onClick: (day: DateTime) => void;
}

export function DayCell({
  day,
  isOtherMonth,
  isToday,
  isSelected,
  events,
  onClick,
}: DayCellProps) {
  return (
    <button
      className={classnames("day-cell", {
        "day--other-month": isOtherMonth,
        "day--today": isToday,
        "day--selected": isSelected,
        "day--has-events": events.length > 0,
      })}
      onClick={() => onClick(day)}
    >
      <span className="day-number">{day.day}</span>
      {events.length > 0 && (
        <div className="day-dots">
          {events.slice(0, 3).map((ev) => (
            <span
              key={ev.id}
              className="day-dot"
              style={{ backgroundColor: ev.color }}
            />
          ))}
        </div>
      )}
    </button>
  );
}
