import React from 'react';
import './ThemeToggle.css';
import IonIcon from '@reacticons/ionicons';
import { sunny, moon } from 'ionicons/icons';

const ThemeToggle = ({ onClick }) => {
  return (
    <label>
      <input type="checkbox" onChange={onClick} />
      <IonIcon name="sunny" className="sun" icon={sunny} />
      <IonIcon name="moon" className="moon" icon={moon} />
      <span className="toggle"></span>
      <span className="animateBg"></span>
    </label>
  );
};

export default ThemeToggle;
