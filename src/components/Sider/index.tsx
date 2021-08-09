import React from 'react';
import SearchModal from '../Search/SearchModal';
import SiderItem from './SiderItem';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import { useGameRule } from '../../contexts/GameRuleContext';
import { useState } from 'react';
import './Sider.scss';

const Sider = () => {
  const { gameRules } = useGameRule();
  const [searchModalOpened, setSearchModalOpened] = useState(false);

  const openSearchModal = () => {
    setSearchModalOpened(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpened(false);
  };

  return (
    <aside className="sider">
      <div className="title-header">
        <Link to="/" className="page-title">
          <h1>Magic The Gathering</h1>
        </Link>
        <div className="search-trigger" onClick={openSearchModal}>
          <Search />
        </div>
      </div>
      <ul className="section-list">
        {Object.entries(gameRules).map(([sectionIdx, section]) => (
          <SiderItem sectionIdx={sectionIdx} section={section} key={sectionIdx} />
        ))}
      </ul>
      <SearchModal visible={searchModalOpened} closeModalHandler={closeSearchModal} />
    </aside>
  );
};

export default Sider;
