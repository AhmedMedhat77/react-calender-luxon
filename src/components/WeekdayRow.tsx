interface WeekdayRowProps {
  weekdays: string[];
}

export function WeekdayRow({ weekdays }: WeekdayRowProps) {
  return (
    <div className="weekday-row">
      {weekdays.map((wd, i) => (
        <div key={`${wd}-${i}`} className="weekday-cell">
          {wd}
        </div>
      ))}
    </div>
  );
}
