# 📚 Section 0️⃣5️⃣: Working with Components, Props and JSX

## Lecture 0️⃣3️⃣3️⃣: Rendering the Root Component and Strict Mode

### Start this project from sratch:

```
03-pizza-menu/
├── public/
├── src/
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── eslint.config.js              # ESLint configuration
├── package.json                  # Project dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

1. **`main.jsx`** file:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## Lecture 0️⃣3️⃣4️⃣: Before We Start Coding: Debugging

1. Stop the app: `CTL + C`
2. Re-run the app: `npm run dev`

## Lecture 0️⃣3️⃣5️⃣: Components as Building Blocks

<img src="./img/lecture035 - Components as Building Blocks - 001.png">
<img src="./img/lecture035 - Components as Building Blocks - 002.png">
<img src="./img/lecture035 - Components as Building Blocks - 003.png">

## Lecture 0️⃣3️⃣6️⃣:Creating And Reusing a Component

### Create `components` folder and `components/pizza.jsx` file:

```
03-pizza-menu/
├── public/
├── src/
│   ├── components/
│   │   └── pizza.jsx     # Pizza component with data and rendering
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

### Pizza component code:

```jsx
const Pizza = () => {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinachnd ricotta cheese</p>
    </div>
  );
};
export default Pizza;
```

> JSX expressions must have one parent element. ts(2657)

### Import `Pizza.jsx` component in `App.jsx`:

```jsx
import Pizza from "./components/pizza.jsx";
function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
export default App;
```

## Lecture 0️⃣3️⃣7️⃣: What is JSX?

<img src="./img/lecture 037 - what is JSX - 001.png" alt="">
<img src="./img/lecture 037 - what is JSX - 002.png" alt="">
<img src="./img/lecture 037 - what is JSX - 003.png" alt="">

## Lecture 0️⃣3️⃣8️⃣: Creating More Components

```
03-pizza-menu/
├── public/
├── src/
│   ├── components/
│   │   ├── header.jsx    # Header component with data and rendering
│   │   ├── menu.jsx      # Menu component with data and rendering
│   │   ├── footer.jsx    # Footer component with data and rendering
│   │   └── pizza.jsx     # Pizza component with data and rendering
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

### 🗣️ **`Header`** component code:

```jsx
const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};
export default Header;
```

### 🚹 **`Menu`** component code:
```jsx
const Menu = () => {
  return (
    <main>
      <h2>Our Menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </main>
  );
};
export default Menu;
```

### 👣 **`Footer`** component code:
```jsx
const Footer = () => {
  //return React.createElement("footer", null, "We're currently open!")
  <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
};
```

### Update **`App.jsx`** file importing new components:
```jsx
import Footer from "./components/Footer";
import Header from "./components/Header";
  import Menu from "./components/Menu";
  function App() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
  export default App;
  ```


## Lecture 0️⃣3️⃣9️⃣: JavaScript Logic in Components
### Using some javascript code from **`Footer`** component:
```jsx
const Footer = () => {
  onst hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  /*
  if (hour >= openHour && hour <= closeHour) 
    alert("We're currently open!");
  else 
    alert("Sorry, we're closed!");
  */

  <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
};
```


## Lecture 0️⃣4️⃣0️⃣: Separation of Concerns









