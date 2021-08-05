import React from 'react';
import SiderItem from './SiderItem';
import './Sider.scss';
import { formatedData } from '../../data/formatedData.js';

const Sider = () => {
  const gameRules = formatedData();

  return (
    <aside className="sider">
      <div className="sidenav">
        <h1 className="title">Magic The Gathering</h1>
        <ul className="section-list">
          {Object.entries(gameRules).map(([sectionIdx, section]) => (
            <SiderItem sectionIdx={sectionIdx} section={section} key={sectionIdx} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sider;
