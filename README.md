# 🍕 Pizza Menu - React Project

A simple pizza menu web application built with React and Vite, displaying different types of pizzas with their ingredients and prices.

## 📁 Project Structure

```
03-pizza-menu/
├── public/
│   └── pizzas/                    # Pizza images
│       ├── focaccia.jpg
│       ├── funghi.jpg
│       ├── margherita.jpg
│       ├── prosciutto.jpg
│       ├── salamino.jpg
│       └── spinaci.jpg
├── src/
│   ├── components/
│   │   └── pizza.jsx             # Pizza component with data and rendering
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # Main HTML file
├── package.json                  # Project dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🚀 Project Creation and Commands

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Project Creation

To create this project from scratch, run the following commands:

```bash
# Create project with Vite + React
npm create vite@latest 03-pizza-menu -- --template react

# Navigate to project directory
cd 03-pizza-menu

# Install dependencies
npm install

# Install ESLint for linting
npm install -D eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh globals

# Run the project in development mode
npm run dev
```

### Available Commands

```bash
# Development - Runs development server with hot reload
npm run dev

# Build - Generates optimized files for production
npm run build

# Linting - Runs ESLint to check code quality
npm run lint

# Preview - Serves built files locally
npm run preview
```

## 🛠️ Technologies Used

- **React 19.1.1** - JavaScript library for building user interfaces
- **Vite 7.1.7** - Fast build tool and development server
- **ESLint** - Static code analysis tool
- **JavaScript (ES6+)** - Programming language

## 📦 Dependencies

### Production Dependencies

- `react` - Main React library
- `react-dom` - React rendering for the DOM

### Development Dependencies

- `@eslint/js` - Base ESLint configuration
- `@types/react` - TypeScript types for React
- `@types/react-dom` - TypeScript types for React DOM
- `@vitejs/plugin-react` - Vite plugin for React
- `eslint` - JavaScript linter
- `eslint-plugin-react-hooks` - ESLint rules for React Hooks
- `eslint-plugin-react-refresh` - ESLint rules for React Refresh
- `globals` - Global variables for ESLint
- `vite` - Build tool

## 🏗️ Project Architecture

### Components

1. **App.jsx** - Root component that renders multiple Pizza components
2. **pizza.jsx** - Component that contains:
   - Array of pizza data (`pizzaData`)
   - Pizza component that renders information for a specific pizza

### Pizza Data

The `pizza.jsx` component includes an array with 6 types of pizzas:

- **Focaccia** - Bread with Italian olive oil and rosemary ($6)
- **Pizza Margherita** - Tomato and mozzarella ($10)
- **Pizza Spinaci** - Tomato, mozzarella, spinach, and ricotta cheese ($12)
- **Pizza Funghi** - Tomato, mozzarella, mushrooms, and onion ($12)
- **Pizza Salamino** - Tomato, mozzarella, and pepperoni ($15) - _Sold Out_
- **Pizza Prosciutto** - Tomato, mozzarella, ham, arugula, and burrata cheese ($18)

Each pizza includes:

- Name
- Ingredients
- Price
- Image name
- Availability status

## 🎯 Features

- Rendering of reusable React components
- Display of pizza images
- Detailed information for each pizza
- Structure ready for future expansion

## 🔧 Configuration

### ESLint

The project is configured with ESLint to maintain code quality with specific rules for React and hooks.

### Vite

Optimized configuration for fast development with hot reload and efficient building.

## 📝 Development Notes

- The project uses React functional components
- Images are located in the `public/pizzas/` folder
- The Pizza component currently renders hardcoded data
- Structure ready to implement dynamic props in future versions
