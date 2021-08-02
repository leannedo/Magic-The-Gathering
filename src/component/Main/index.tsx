import { useGameRule } from '../../contexts/GameRuleContext';
import React from 'react';
import './Main.scss';

const Main = () => {
  const { gameRule } = useGameRule();

  return (
    <div className="main-content">
      <div className="content">
        {Object.entries(gameRule).map(([index, text]: [string, string]) => (
          <p key={index} className="rule">
            <span>{`${index}.`}</span>
            {text && text.split('\r\n').map((t, i) => <p key={i}>{t}</p>)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Main;
