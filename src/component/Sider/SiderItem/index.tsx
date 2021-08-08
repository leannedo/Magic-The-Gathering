import React, { useState } from 'react';
import './SiderItem.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';

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
      <div className="section-item">
        <a
          className={`item-link section-link ${showChapter ? 'active' : ''}`}
          onClick={showChapterHandler}
        >
          {`${sectionIdx}. ${section.title}`}
        </a>
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
