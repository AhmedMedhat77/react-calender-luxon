import { useCalendar } from "../hooks/useCalendar";
import { CalendarHeader } from "./CalendarHeader";
import { WeekdayRow } from "./WeekdayRow";
import { DaysGrid } from "./DaysGrid";
import { EventsPanel } from "./EventsPanel";

export default function Calendar() {
  const {
    today,
    weekdays,
    daysOfMonth,
    selectedDay,
    activeMonth,
    isAnimating,
    eventsForDay,
    slideClass,
    monthLabel,
    goToPrevMonth,
    goToNextMonth,
    goToToday,
    selectDay,
    getEventsForDate,
    addEvent,
    deleteEvent,
    randomColor,
  } = useCalendar();

  return (
    <div className="calendar-wrapper">
      <div className="calendar">
        <CalendarHeader
          monthLabel={monthLabel}
          isAnimating={isAnimating}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
          onToday={goToToday}
        />
        <WeekdayRow weekdays={weekdays} />
        <DaysGrid
          days={daysOfMonth}
          today={today}
          selectedDay={selectedDay}
          activeMonth={activeMonth}
          slideClass={slideClass}
          getEventsForDate={getEventsForDate}
          onDayClick={selectDay}
        />
      </div>
      <EventsPanel
        selectedDay={selectedDay}
        eventsForDay={eventsForDay}
        onAddEvent={addEvent}
        onDeleteEvent={deleteEvent}
        randomColor={randomColor}
      />
    </div>
  );
}
