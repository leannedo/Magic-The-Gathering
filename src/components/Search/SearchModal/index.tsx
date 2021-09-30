import Input from '../../Input';
import Modal from '../../Modal';
import React, { KeyboardEvent } from 'react';
import SearchResult from '../SearchResult';
import { ArrowRight, Search } from 'react-feather';
import { Link, useHistory } from 'react-router-dom';
import './SearchModal.scss';

const SEARCH_RESULT_LIMIT = 5;

interface SearchModalProps {
  visible: boolean;
  closeModalHandler: () => void;
}

const SearchModal = ({ visible, closeModalHandler }: SearchModalProps): JSX.Element => {
  const history = useHistory();
  const toSearchPageUrl = (searchTerm = '') => `/search?query=${searchTerm}`;
  const searchResults = [];

  const onKeyUp = (event: KeyboardEvent) => {
    // Enter key
    if (event.keyCode === 13) {
      closeModalHandler();
      history.push(toSearchPageUrl());
    }
  };

  return (
    <Modal className="search-modal" visible={visible} closeModalHandler={closeModalHandler}>
      <Input
        className="search-input"
        icon={<Search />}
        placeholder="Search for rules..."
        onKeyUp={onKeyUp}
      />
      <div className="modal-search-results">
        <SearchResult results={searchResults} searchTerm={''} />
      </div>
      {searchResults.length > SEARCH_RESULT_LIMIT && (
        <Link to={toSearchPageUrl()} className="search-see-more" onClick={closeModalHandler}>
          <span>See more</span>
          <ArrowRight />
        </Link>
      )}
    </Modal>
  );
};

export default SearchModal;
