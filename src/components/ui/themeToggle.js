import React from "react";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {isDarkMode ? (
        // Moon SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#252118"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
          className="ml-4"
        >
          <mask id="circle-mask-1">
            <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
            <circle cx="100%" cy="0%" r="9" fill="black"></circle>
          </mask>
          <circle
            cx="12"
            cy="12"
            fill="#252118"
            style={{ r: "5px" }}
            mask="url(#circle-mask-1)"
          ></circle>
          <g stroke="currentColor" style={{ opacity: 1 }}>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </g>
        </svg>
      ) : (
        // Sun SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#252118"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            cursor: "pointer",
            transform: "rotate(40deg)",
          }}
          className="ml-4"
        >
          <mask id="circle-mask-1">
            <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
            <circle cx="50%" cy="23%" r="9" fill="black"></circle>
          </mask>
          <circle
            cx="12"
            cy="12"
            fill="#E7E3DA"
            style={{ r: "9px" }}
            mask="url(#circle-mask-1)"
          ></circle>
          <g stroke="currentColor" style={{ opacity: 0 }}>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </g>
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
