import { useState } from "react";
import classnames from "classnames";
import { EVENT_COLORS } from "../types/calendar";
import type { EventColor } from "../types/calendar";

interface EventFormProps {
  initialColor: EventColor;
  onSave: (title: string, color: EventColor) => void;
  onCancel: () => void;
}

export function EventForm({ initialColor, onSave, onCancel }: EventFormProps) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<EventColor>(initialColor);

  const handleSave = () => {
    if (!title.trim()) return;
    onSave(title, color);
    setTitle("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") onCancel();
  };

  return (
    <div className="event-form">
      <input
        type="text"
        className="event-input"
        placeholder="Event title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div className="event-form-footer">
        <div className="color-picker">
          {EVENT_COLORS.map((c) => (
            <button
              key={c}
              className={classnames("color-swatch", {
                "color-swatch--active": color === c,
              })}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
        <div className="event-form-actions">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="save-btn"
            onClick={handleSave}
            disabled={!title.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
