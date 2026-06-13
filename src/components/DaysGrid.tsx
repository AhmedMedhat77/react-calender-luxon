import classnames from "classnames";
import { DateTime } from "luxon";
import type { CalendarEvent } from "../types/calendar";
import { DayCell } from "./DayCell";

interface DaysGridProps {
  days: DateTime[];
  today: DateTime;
  selectedDay: DateTime;
  activeMonth: DateTime;
  slideClass: string;
  getEventsForDate: (day: DateTime) => CalendarEvent[];
  onDayClick: (day: DateTime) => void;
}

export function DaysGrid({
  days,
  today,
  selectedDay,
  activeMonth,
  slideClass,
  getEventsForDate,
  onDayClick,
}: DaysGridProps) {
  return (
    <div className={classnames("days-grid", slideClass)}>
      {days.map((day) => (
        <DayCell
          key={day.toISO()}
          day={day}
          isOtherMonth={!day.hasSame(activeMonth, "month")}
          isToday={day.hasSame(today, "day")}
          isSelected={selectedDay.hasSame(day, "day")}
          events={getEventsForDate(day)}
          onClick={onDayClick}
        />
      ))}
    </div>
  );
}
