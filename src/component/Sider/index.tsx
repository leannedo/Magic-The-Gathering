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
          {Object.values(gameRules).map((obj: any, index) => (
            <SiderItem section={`${index + 1}. ${obj.title}`} key={index} chapters={obj.content} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sider;
