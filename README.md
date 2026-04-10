# scrolling_app


# 🚗 Scroll Animation App (React + Vite)

## Overview

This project is a scroll-driven animation built using **React and Vite**, where a car moves horizontally across the screen as the user scrolls. The application also includes dynamic statistic panels that appear based on scroll position, creating an interactive visual experience.

## Tech Stack

* React (JSX-based UI)
* Vite (fast build tool)
* CSS3 (Flexbox, positioning, animations)
* JavaScript (scroll handling logic)

## Project Structure

```
scrolling_app/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

* Scroll-based horizontal car animation
* Fixed road layout for consistent visual positioning
* Dynamic stat cards with smooth appearance transitions
* Modular React component structure
* Fast development with Vite

## Getting Started

### 1. Clone the Repository

```
git clone <your-repo-url>
cd scrolling_app
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Development Server

```
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

## How It Works

* The page height is extended to allow scrolling.
* Scroll position is tracked inside React (typically using `window.scrollY` or hooks).
* The car’s position updates dynamically based on scroll progress.
* Statistic cards (`stat1`, `stat2`, etc.) are revealed using opacity transitions at specific scroll points.

## Styling Notes

* Layout uses **flexbox** for alignment.
* Elements like the road and stats use **fixed positioning**.
* Animation performance can be improved using `transform: translateX()` instead of `left`.

## Optimization Suggestions

* Remove duplicate CSS declarations to reduce redundancy
* Convert stat sections into reusable React components
* Use `useEffect` + `useState` for controlled scroll animations
* Consider using animation libraries like GSAP for smoother transitions

## Future Enhancements

* Mobile responsiveness
* Smooth scrolling effects
* Component-based animation control
* Interactive UI controls (pause, speed control)
