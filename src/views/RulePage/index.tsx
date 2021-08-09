import React from 'react';
import Rule from '../../components/Rule';
import { ChevronRight } from 'react-feather';
import { useGameRule } from '../../contexts/GameRuleContext';
import { useParams } from 'react-router-dom';
import './RulePage.scss';

const LINE_SEPARATOR = /\r\n/;

const RulePage = () => {
  const { gameRules } = useGameRule();
  const { sectionIdx, chapterIdx } = useParams();

  const gameRule = gameRules[sectionIdx]?.content[chapterIdx]?.content;
  const sectionTitle = gameRules[sectionIdx]?.title;
  const chapterTitle = gameRules[sectionIdx]?.content[chapterIdx]?.title;

  const renderRules = () => {
    return Object.entries(gameRule).map(([index, rule]) => (
      <div key={index} className="rule">
        <div id={index} className="rule-index">{`${index}.`}</div>
        {rule.split(LINE_SEPARATOR).map((text, index) => (
          <Rule key={index} ruleText={text} />
        ))}
      </div>
    ));
  };

  return (
    <div className="rules-view">
      <h2 className="breadcumb title">
        {sectionTitle}
        <ChevronRight />
        {chapterTitle}
      </h2>
      <div className="rules-container">{gameRule && renderRules()}</div>
    </div>
  );
};
export default RulePage;
