import React from 'react';
import './ThemeToggle.css';
import IonIcon from '@reacticons/ionicons';
import { sunny, moon } from 'ionicons/icons';

const ThemeToggle = ({ onClick, isDarkMode }) => {
  return (
    <label>
      <input type="checkbox" onChange={onClick} checked={isDarkMode} />
      <IonIcon name="moon" className="moon" icon={moon} />
      <IonIcon name="sunny" className="sun" icon={sunny} />
    </label>
  );
};

export default ThemeToggle;
