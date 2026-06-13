interface CalendarHeaderProps {
  monthLabel: string;
  isAnimating: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

const ChevronLeft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export function CalendarHeader({
  monthLabel,
  isAnimating,
  onPrev,
  onNext,
  onToday,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header">
      <div className="calendar-header-nav">
        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={isAnimating}
          aria-label="Previous month"
        >
          <ChevronLeft />
        </button>
        <h2 className="calendar-title">{monthLabel}</h2>
        <button
          className="nav-btn"
          onClick={onNext}
          disabled={isAnimating}
          aria-label="Next month"
        >
          <ChevronRight />
        </button>
      </div>
      <button className="today-btn" onClick={onToday}>
        Today
      </button>
    </div>
  );
}
