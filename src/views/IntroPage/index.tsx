import React from 'react';
import './IntroPage.scss';

const IntroPage = (): JSX.Element => {
  return (
    <div className="intro-view">
      <h2 className="title">Introduction</h2>
      <p>
        This document is the ultimate authority for Magic: The Gathering® competitive game play. It
        consists of a series of numbered rules followed by a glossary. Many of the numbered rules
        are divided into subrules, and each separate rule and subrule of the game has its own
        number. (Note that subrules skip the letters “l” and “o” due to potential confusion with the
        numbers “1” and “0”; subrule 704.5k is followed by 704.5m, then 704.5n, then 704.5p, for
        example.) Changes may have been made to this document since its publication. You can
        download the most recent version from the Magic rules website at Magic.Wizards.com/Rules. If
        you have questions, you can get the answers from us at Support.Wizards.com.
      </p>
    </div>
  );
};

export default IntroPage;
