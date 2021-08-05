import React, { useState } from 'react';
import './SiderItem.scss';
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';

const SiderItem = ({ sectionIdx, section }) => {
  const { pathname } = useLocation();

  const routeParams = matchPath(pathname, { path: '/section/:sectionId' });

  const [showChapter, setShowChapter] = useState(
    routeParams.params.sectionId === sectionIdx || null,
  );

  const showChapterHandler = () => {
    setShowChapter(!showChapter);
  };

  return (
    <li className="section-item">
      <a className="item-link section-link" onClick={showChapterHandler}>
        {section.title}
      </a>
      {showChapter && (
        <ul className="chapter-list">
          {Object.entries(section.content).map(([chapterIdx, { title }]) => (
            <li key={chapterIdx} className="chapter-item">
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
                to={`/section/${sectionIdx}/chapter/${chapterIdx}`}
                replace
                className="item-link chapter-link"
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
