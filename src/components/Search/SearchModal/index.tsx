import Input from '../../Input';
import Modal from '../../Modal';
import React from 'react';
import SearchResult from '../SearchResult';
import { ArrowRight, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import './SearchModal.scss';

const SearchModal = ({ visible, closeModalHandler }) => {
  return (
    <Modal className="search-modal" visible={visible} closeModalHandler={closeModalHandler}>
      <Input className="search-input" icon={<Search />} placeholder="Search for rules..." />
      <div className="modal-search-results">
        <SearchResult />
      </div>
      <Link to={`/search?query=${'pig'}`} className="search-see-more" onClick={closeModalHandler}>
        <span>See more</span>
        <ArrowRight />
      </Link>
    </Modal>
  );
};

export default SearchModal;
