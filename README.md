# CV App

An interactive single-page resume (CV) web application built with React.

## Overview

This project renders a personal CV/resume as a web application, organized into reusable components for each section of a typical resume.

## Features

- **Navigation** — quick access between resume sections
- **Info** — personal details and summary
- **Address** — contact and location information
- **Expertise** — skills and competencies
- **Timeline** — work experience / education history
- **Portfolio** — showcase of projects
- **PhotoBox** — profile photo display
- **Feedback** — testimonials or references
- **Panel / Box / Button** — shared UI building blocks

## Tech Stack

- [React](https://reactjs.org/) 19
- [React Router](https://reactrouter.com/) for navigation
- [Sass](https://sass-lang.com/) for styling
- [Font Awesome](https://fontawesome.com/) for icons
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for tests

## Getting Started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page reloads automatically when you make changes.

### Other available scripts

- `npm test` — launches the test runner in interactive watch mode
- `npm run build` — builds the app for production into the `build` folder

## Project Structure

```
src/
  components/   # Reusable UI components (Address, Expertise, Portfolio, Timeline, etc.)
  pages/        # Top-level pages (Home, Inner)
  assets/       # Images and static assets
  App.js        # Root application component
```

## License

This project is for educational/personal portfolio purposes.