import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

const ThemeToggle = () => {
  return (
    <div className="theme-toggle-container">
      <Classic className="theme-toggle-icon" duration={750} />
    </div>
  );
};

export default ThemeToggle;
