import Input from '../Input';
import Modal from '../Modal';
import React from 'react';
import { Search } from 'react-feather';
import './SearchModal.scss';

const SearchModal = ({ visible, closeModalHandler }) => {
  return (
    <Modal className="search-modal" visible={visible} closeModalHandler={closeModalHandler}>
      <Input className="search-input" icon={<Search />} placeholder="Search for rules..." />
      <div className="search-results">
        <div className="search-count">Found 5 results</div>
        <div className="search-results-list">
          <div className="search-item">
            <div className="search-title">Concept - Gameplay - 100.1a</div>
            <div className="search-match">We win this game by playing this rule...</div>
          </div>
          <div className="search-item">
            <div className="search-title">Concept - Gameplay - 100.1a</div>
            <div className="search-match">We win this game by playing this rule...</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
