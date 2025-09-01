# Campus Club Dashboard

A React + TypeScript dashboard application for managing campus club members and their tasks.

## Features

- **Member Management**: View all club members with their roles and status
- **Task Tracking**: Display tasks assigned to each member
- **Filter Options**: Switch between showing all members or only active members
- **Layout Toggle**: Switch between flex and grid display layouts
- **Interactive UI**: Click on member cards to view their assigned tasks

## Project Structure

```
Dashboard/
├── src/
│   ├── components/
│   │   ├── header.tsx          # App header component
│   │   ├── footer.tsx          # App footer component
│   │   ├── main.tsx            # Main app component
│   │   ├── membercard.tsx      # Individual member card
│   │   ├── memberslist.tsx     # List of all members
│   │   ├── taskcard.tsx        # Individual task card
│   │   ├── tasklist.tsx        # List of tasks
│   │   └── filterbar.tsx       # Filter controls
│   ├── types/
│   │   ├── member.ts           # Member interface
│   │   └── task.ts             # Task interface & sample data
│   ├── dataExsampel.tsx        # Sample member data
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App styles
│   └── main.tsx                # App entry point
├── package.json
└── README.md
```

## Technologies Used

- **React 19.1.1** - Frontend framework
- **TypeScript 5.8.3** - Type safety
- **Vite 7.1.2** - Build tool and dev server
- **CSS3** - Styling with CSS variables and grid/flexbox layouts

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Component Overview

### Member Card
- Displays member name, role, and status
- Shows initials as avatar
- Button to view member's tasks
- Color-coded by role (Leader: blue, Member: green, Other: purple)

### Task Card
- Shows task ID, title, and assigned member
- Checkbox for completion status
- Displays task details

### Filter Bar
- Toggle between all members and active members only
- Switch display layout (flex/grid)

## Data Structure

### Member Interface
```typescript
interface Member {
  id: string;
  name: string;
  role: string;
  active?: boolean;
  taskButton: () => (id: string) => void;
}
```

### Task Interface
```typescript
interface Task {
  id: string;
  title: string;
  done: boolean;
  assignedTo: string;
}
```

## Styling

The project uses a modern CSS approach with:
- CSS custom properties (variables) for theming
- Responsive design with CSS Grid and Flexbox
- Mobile-first responsive breakpoints
- Clean, accessible design patterns

## Sample Data

The project includes sample data for:
- 50 club members with different roles and statuses
- 100 tasks assigned to various members
- Mix of completed and pending tasks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the linter and fix any issues
5. Submit a pull request

## License

This project is private and for educational purposes.

---

© 2025 Campus Coding Club