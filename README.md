<p align="center">
  <img src="src/assets/hero.png" alt="React Calender" width="600" />
</p>

<h1 align="center">React Calender</h1>

<p align="center">
  A sleek, interactive calendar built with React, TypeScript, and Tailwind CSS.<br/>
  Add, color-code, and manage events — all persisted in your browser.
</p>

---

## Features

- **Month navigation** — smoothly browse months with animated slide transitions
- **Event management** — add and delete events with a color-coded system (8 color options)
- **Local persistence** — events are saved to `localStorage` and survive page reloads
- **Today highlight** — instantly jump back to the current date with the "Today" button
- **Event indicators** — colored dots on days that have events, so you can spot busy days at a glance
- **Responsive side panel** — selected day's events are displayed in a dedicated panel with add/delete controls
- ** polished UI** — clean design with subtle shadows, rounded corners, hover effects, and micro-animations

## Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Framework      | [React](https://react.dev) 19     |
| Language       | [TypeScript](https://typescriptlang.org) 6 |
| Styling        | [Tailwind CSS](https://tailwindcss.com) 4 |
| Build Tool     | [Vite](https://vite.dev) 8        |
| Date Handling  | [Luxon](https://moment.github.io/luxon/) 3 |
| Linting        | ESLint 10 with React Hooks plugin |

## Project Structure

```
src/
├── assets/             # Static assets (hero image, SVGs)
├── components/
│   ├── Calendar.tsx        # Root calendar layout
│   ├── CalendarHeader.tsx  # Month title + navigation buttons
│   ├── WeekdayRow.tsx      # Day-of-week headers (Mon, Tue, …)
│   ├── DaysGrid.tsx        # Grid of day cells for the month
│   ├── DayCell.tsx         # Individual day cell with event dots
│   ├── EventsPanel.tsx     # Side panel showing events for selected day
│   ├── EventForm.tsx       # Inline form for adding new events
│   └── EventItem.tsx       # Single event row with delete action
├── hooks/
│   └── useCalendar.ts      # Core state: month, day selection, CRUD for events
├── types/
│   └── calendar.ts         # CalendarEvent, DayCellProps, EVENT_COLORS
├── App.tsx
├── index.css               # Tailwind import + custom theme + component styles
└── main.tsx                # React DOM entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- [pnpm](https://pnpm.io) (or npm/yarn)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/your-username/react-calender.git
cd react-calender

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
pnpm build
```

The output is written to the `dist/` directory.

### Preview the Production Build

```bash
pnpm preview
```

## Usage

1. **Navigate months** — use the arrow buttons (`<` `>`) in the header
2. **Jump to today** — click the "Today" button
3. **Select a day** — click any day cell; the side panel updates to show that day's events
4. **Add an event** — click the "+ Add Event" button in the side panel, type a title, pick a color, and save
5. **Delete an event** — hover over an event and click the trash icon

## License

MIT
