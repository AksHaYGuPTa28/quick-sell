import React from 'react';
import './header.css';
import DisplayDropdown from '../Dropdowns/DisplayDropdown';
import { useTheme } from '../../ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

function Header({ grouping, setGrouping, ordering, setOrdering }: { grouping: string, setGrouping: (grouping: string) => void, ordering: string, setOrdering: (ordering: string) => void }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <DisplayDropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
      <div className="theme-toggle-container">
        <FiSun className="icon sun-icon" />
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider round"></span>
        </label>
        <FiMoon className="icon moon-icon" />
      </div>
    </header>
  );
}

export default Header;
