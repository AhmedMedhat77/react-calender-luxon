import { DateTime, Info, Interval } from "luxon";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { CalendarEvent, EventColor } from "../types/calendar";
import { EVENT_COLORS } from "../types/calendar";

const ANIMATION_DURATION = 200;

export function useCalendar() {
  const [activeMonth, setActiveMonth] = useState<DateTime>(() =>
    DateTime.local().startOf("month"),
  );
  const [selectedDay, setSelectedDay] = useState<DateTime>(() =>
    DateTime.local(),
  );
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const today = DateTime.local();
  const weekdays = Info.weekdays("narrow");

  const daysOfMonth = useMemo(() => {
    const start = activeMonth.startOf("week");
    const end = activeMonth.endOf("month").endOf("week");
    return Interval.fromDateTimes(start, end)
      .splitBy({ day: 1 })
      .map((d) => d.start)
      .filter((d): d is DateTime => d !== null);
  }, [activeMonth]);

  const goToPrevMonth = useCallback(() => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveMonth((prev) => prev.minus({ months: 1 }));
      setIsAnimating(false);
      setSlideDirection(null);
    }, ANIMATION_DURATION);
  }, [isAnimating]);

  const goToNextMonth = useCallback(() => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveMonth((prev) => prev.plus({ months: 1 }));
      setIsAnimating(false);
      setSlideDirection(null);
    }, ANIMATION_DURATION);
  }, [isAnimating]);

  const goToToday = useCallback(() => {
    setActiveMonth(DateTime.local().startOf("month"));
    setSelectedDay(DateTime.local());
  }, []);

  const selectDay = useCallback((day: DateTime) => {
    setSelectedDay(day);
  }, []);

  const eventsForDay = useMemo(() => {
    const dateStr = selectedDay.toFormat("yyyy-MM-dd");
    return events.filter((e) => e.date === dateStr);
  }, [events, selectedDay]);

  const getEventsForDate = useCallback(
    (day: DateTime) => {
      const dateStr = day.toFormat("yyyy-MM-dd");
      return events.filter((e) => e.date === dateStr);
    },
    [events],
  );

  const addEvent = useCallback(
    (title: string, color: EventColor) => {
      if (!title.trim()) return;
      const newEvent: CalendarEvent = {
        id: crypto.randomUUID(),
        date: selectedDay.toFormat("yyyy-MM-dd"),
        title: title.trim(),
        color,
      };
      setEvents((prev) => [...prev, newEvent]);
      localStorage.setItem("events", JSON.stringify([...events, newEvent]));
    },
    [selectedDay, events],
  );

  const deleteEvent = useCallback(
    (id: string) => {
      const newEventsArray = events.filter((e) => e.id !== id);
      setEvents(newEventsArray);
      localStorage.setItem("events", JSON.stringify(newEventsArray));
    },
    [events],
  );

  const randomColor = useCallback((): EventColor => {
    return EVENT_COLORS[Math.floor(Math.random() * EVENT_COLORS.length)];
  }, []);

  const slideClass = slideDirection
    ? slideDirection === "left"
      ? "slide-out-left"
      : "slide-out-right"
    : "slide-in";

  const monthLabel = `${activeMonth.monthLong} ${activeMonth.year}`;

  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  return {
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
  };
}
