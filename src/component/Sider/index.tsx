import React from 'react';
import SiderItem from './SiderItem';
import { formatedData } from '../../data/formatedData.js';
import { Link } from 'react-router-dom';
import './Sider.scss';

const Sider = () => {
  const gameRules = formatedData();

  return (
    <aside className="sider">
      <Link to="/" className="title">
        Magic The Gathering
      </Link>
      <ul className="section-list">
        {Object.entries(gameRules).map(([sectionIdx, section]) => (
          <SiderItem sectionIdx={sectionIdx} section={section} key={sectionIdx} />
        ))}
      </ul>
    </aside>
  );
};

export default Sider;
