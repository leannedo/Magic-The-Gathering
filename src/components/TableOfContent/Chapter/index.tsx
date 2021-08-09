import React from 'react';
import { NavLink } from 'react-router-dom';
import './Chapter.scss';

const Chapter = ({ sectionIdx, chapterIdx, chapterTitle }) => {
  return (
    <li key={chapterIdx} className="chapter-item">
      <NavLink
        activeClass="active"
        to={`/section/${sectionIdx}/chapter/${chapterIdx}`}
        replace
        className="item-link chapter-link"
        onClick={() => scrollTo(0, 0)}
      >
        {`${chapterIdx}. ${chapterTitle}`}
      </NavLink>
    </li>
  );
};

export default Chapter;
