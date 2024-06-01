import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';
import './displayDropdown.css';
import { VscSettings } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";

interface DisplayDropdownProps {
  grouping: string;
  setGrouping: (grouping: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
}

const DisplayDropdown: React.FC<DisplayDropdownProps> = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsVisible(prevState => !prevState);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className='display-dropdown' ref={dropdownRef}>
      <div className='dropdown-label-container' onClick={toggleDropdown}>
        <VscSettings color='#6b6f76' />
        <div className='dropdown-label'>Display</div>
        <BiChevronDown color='#6b6f76' />
      </div>
      <div className={`dropdown-content-container ${isVisible ? 'visible' : ''}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select
            name="grouping"
            id="grouping"
            value={grouping}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setGrouping(e.target.value)}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select
            name="ordering"
            id="ordering"
            value={ordering}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setOrdering(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DisplayDropdown;