import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useGameRule } from '../../contexts/GameRuleContext';
import { useParams } from 'react-router-dom';
import './RulePage.scss';

const RulePage = () => {
  const { gameRules } = useGameRule();
  let { sectionIdx, chapterIdx } = useParams();

  const gameRule = gameRules[sectionIdx].content[chapterIdx].content;

  const renderRule = (ruleText, index) => {
    const linkRegex = /[0-9]{3,}\.?[0-9]*[a-z]?/;

    if (linkRegex.test(ruleText)) {
      const linkText = ruleText.match(linkRegex)[0];

      let chapter = '';
      let link = '';
      const isRule = /[0-9]{3,}\.[0-9]+[a-z]?/.test(linkText);
      if (isRule) {
        chapter = linkText.split('.')[0];
        const section = chapter.slice(0, chapter.length - 2);
        link = `/section/${section}/chapter/${chapter}#${linkText}`;
      } else {
        chapter = linkText.replace('.', '');
        const section = chapter.slice(0, chapter.length - 2);
        link = `/section/${section}/chapter/${chapter}`;
      }

      const textParts = ruleText.split(linkText);

      return (
        <p key={index}>
          {textParts[0]}
          <Link to={link}>{linkText}</Link>
          {textParts[1]}
        </p>
      );
    }

    return <p key={index}>{ruleText}</p>;
  };

  return (
    <div className="rules-view">
      <h2 className="breadcumb title">
        {[gameRules[sectionIdx].title, gameRules[sectionIdx].content[chapterIdx].title].join(' > ')}
      </h2>
      <div className="rules-container">
        {Object.entries(gameRule).map(([index, text]: [string, string]) => (
          <div key={index} className="rule">
            <div id={index} className="rule-index">{`${index}.`}</div>
            {text && text.split('\r\n').map((t, i) => renderRule(t, i))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RulePage;
