import Chapter from '../Chapter';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';
import './Section.scss';
import { Section } from '../../../data/rule-types';

interface SectionProps {
  sectionIdx: string;
  section: Section;
}

const Section = ({ sectionIdx, section }: SectionProps): JSX.Element => {
  const { pathname } = useLocation();

  const routeParams = matchPath(pathname, { path: '/section/:sectionId' });

  const isSectionActive = routeParams?.params?.sectionId === sectionIdx;

  const [showChapter, setShowChapter] = useState<boolean>(isSectionActive || null);

  const toggleShowChapter = () => {
    setShowChapter(!showChapter);
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
      <div className="section-item" onClick={toggleShowChapter}>
        <a className={`item-link section-link ${showChapter ? 'active' : ''}`}>
          {`${sectionIdx}. ${section.title}`}
        </a>
        {showChapter ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showChapter && <ul className="chapter-list">{renderChapters()}</ul>}
    </li>
  );
};

export default Section;
