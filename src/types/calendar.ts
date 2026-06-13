import { DateTime } from "luxon";

export interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  color: string;
  done: boolean;
}

export interface DayCellProps {
  day: DateTime;
  isOtherMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  hasEvents: boolean;
  events: CalendarEvent[];
  onClick: (day: DateTime) => void;
}

export const EVENT_COLORS = [
  "#6366f1",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ef4444",
  "#8b5cf6",
  "#14b8a6",
] as const;

export type EventColor = (typeof EVENT_COLORS)[number];
