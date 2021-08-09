import React from 'react';
import SearchModal from '../Search/SearchModal';
import TableOfContent from '../TableOfContent';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import { useState } from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  const [searchModalOpened, setSearchModalOpened] = useState(false);

  const openSearchModal = () => {
    setSearchModalOpened(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpened(false);
  };

  return (
    <aside className="sidebar">
      <div className="title-header">
        <Link to="/" className="page-title">
          <h1>Magic The Gathering</h1>
        </Link>
        <div className="search-trigger" onClick={openSearchModal}>
          <Search />
        </div>
      </div>
      <TableOfContent />
      <SearchModal visible={searchModalOpened} closeModalHandler={closeSearchModal} />
    </aside>
  );
};

export default Sidebar;
