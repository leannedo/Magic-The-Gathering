import React from 'react';
import Section from '../TableOfContent/Section';
import { useGameRule } from '../../contexts/GameRuleContext';
import './TableOfContent.scss';

const TableOfContent = (): JSX.Element => {
  const { gameRules } = useGameRule();

  return (
    <ul className="table-of-content">
      {Object.entries(gameRules).map(([sectionIdx, section]) => (
        <Section key={sectionIdx} sectionIdx={sectionIdx} section={section} />
      ))}
    </ul>
  );
};

export default TableOfContent;
