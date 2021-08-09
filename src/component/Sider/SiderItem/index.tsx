import React, { useState } from 'react';
import { matchPath } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronUp, ChevronDown } from 'react-feather';
import './SiderItem.scss';

const SiderItem = ({ sectionIdx, section }) => {
  const { pathname } = useLocation();

  const routeParams = matchPath(pathname, { path: '/section/:sectionId' });

  const [showChapter, setShowChapter] = useState(
    routeParams?.params?.sectionId === sectionIdx || null,
  );

  const showChapterHandler = () => {
    setShowChapter(!showChapter);
  };

  return (
    <li className="section-container">
      <div className="section-item" onClick={showChapterHandler}>
        <a className={`item-link section-link ${showChapter ? 'active' : ''}`}>
          {`${sectionIdx}. ${section.title}`}
        </a>
        {showChapter ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showChapter && (
        <ul className="chapter-list">
          {Object.entries(section.content).map(([chapterIdx, { title }]) => (
            <li key={chapterIdx} className="chapter-item">
              <NavLink
                activeClass="active"
                to={`/section/${sectionIdx}/chapter/${chapterIdx}`}
                replace
                className="item-link chapter-link"
                onClick={() => scrollTo(0, 0)}
              >
                {`${chapterIdx}. ${title}`}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SiderItem;
