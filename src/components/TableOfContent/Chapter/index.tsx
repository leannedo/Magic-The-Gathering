import React from 'react';
import { NavLink } from 'react-router-dom';
import './Chapter.scss';

interface ChapterProps {
  sectionIdx: string;
  chapterIdx: string;
  chapterTitle: string;
}

const Chapter = ({ sectionIdx, chapterIdx, chapterTitle }: ChapterProps): JSX.Element => {
  return (
    <li key={chapterIdx} className="chapter-item">
      <NavLink
        activeClassName="active"
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
