import "./App.css";
import { useNavigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import ThemeSelect from "./components/ThemeSelect";
import { ThemeContext, themes } from "./context/themeContext";

function App() {
  // THEMES
  const { theme, toggleTheme } = useContext(ThemeContext);

  // NAVIGATION
  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate("home");
  };

  const handleShowProducts = () => {
    navigate("products");
  };

  return (
    <div className="App" style={{ background: theme.background, color: theme.foreground }}>
      <nav>
        <button onClick={handleShowHome} className="btnNav">
          Home
        </button>
        <button onClick={handleShowProducts} className="btnNav">
          Products
        </button>
      </nav>

      <header
        className="header"
        style={{
          background: theme.background,
          color: theme.foreground,
          border: theme.border,
        }}
      >
        <div className="header-content">
          <p className="dmText">Choose Theme</p>
          <ThemeSelect onChange={toggleTheme} options={Object.keys(themes)} />
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
