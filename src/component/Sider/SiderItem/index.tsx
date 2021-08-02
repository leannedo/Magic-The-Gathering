import React, { useState } from 'react';
import './SiderItem.scss';
import { useGameRule } from '../../../contexts/GameRuleContext';

const SiderItem = ({ section, chapters }) => {
  const [showChapter, setShowChapter] = useState(false);
  const { setGameRule } = useGameRule();

  const onClickHandler = (chapter) => {
    setGameRule(chapter[1].content);
    console.log(Object.values(chapter[1].content));
  };

  const showChapterHandler = () => {
    setShowChapter(!showChapter);
  };

  return (
    <li className="section-item" onClick={showChapterHandler}>
      <a href={`#${section}`} className="item-link section-link">
        {section}
      </a>
      {showChapter && (
        <ul className="chapter-list">
          {Object.entries(chapters).map((chapterArr: any, index) => (
            <li key={index} className="chapter-item" onClick={() => onClickHandler(chapterArr)}>
              <a href={`#${section}-${chapterArr[1].title}`} className="item-link chapter-link">
                {`${chapterArr[0]}. ${chapterArr[1].title}`}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SiderItem;
