import Chapter from '../Chapter';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';
import './Section.scss';

const Section = ({ sectionIdx, section }) => {
  const { pathname } = useLocation();

  const routeParams = matchPath(pathname, { path: '/section/:sectionId' });

  const isSectionActive = routeParams?.params?.sectionId === sectionIdx;

  const [shouldChapterShown, setshouldChapterShown] = useState<boolean>(isSectionActive || null);

  const showChapter = () => {
    setshouldChapterShown(!shouldChapterShown);
  };

  const renderChapters = () => {
    return Object.entries(section.content).map(([chapterIdx, { title }]) => (
      <Chapter
        key={chapterIdx}
        sectionIdx={sectionIdx}
        chapterIdx={chapterIdx}
        chapterTitle={title}
      />
    ));
  };

  return (
    <li className="section-container">
      <div className="section-item" onClick={showChapter}>
        <a className={`item-link section-link ${shouldChapterShown ? 'active' : ''}`}>
          {`${sectionIdx}. ${section.title}`}
        </a>
        {shouldChapterShown ? <ChevronUp /> : <ChevronDown />}
      </div>
      {shouldChapterShown && <ul className="chapter-list">{renderChapters()}</ul>}
    </li>
  );
};

export default Section;
