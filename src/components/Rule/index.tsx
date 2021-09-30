import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { toRulePath } from '../../utils/path';
import './Rule.scss';

const CHAPTER_AND_RULE_REGEX = /[0-9]{3,}\.?[0-9]*[a-z]?/g;
const RULE_REGEX = /[0-9]{3,}\.[0-9]+[a-z]?/;
const HYPERLINK_SEPARATOR = '<hpl>';

interface RuleProps {
  ruleText: string;
}

const Rule = ({ ruleText }: RuleProps): JSX.Element => {
  const foundHyperLink = CHAPTER_AND_RULE_REGEX.test(ruleText);

  const toPath = (text: string): string => {
    if (!text) {
      return '';
    }
    const isRule = RULE_REGEX.test(text);
    const chapter = isRule ? text.split('.')[0] : text.replace('.', '');
    const section = chapter.slice(0, chapter.length - 2);
    const rule = isRule ? text : '';

    return toRulePath(chapter, section, rule);
  };

  const renderRuleTextWithHyperLink = () => {
    const hyperLinks = ruleText.match(CHAPTER_AND_RULE_REGEX);
    let tempRuleText = ruleText;

    hyperLinks.forEach((linkText) => {
      tempRuleText = tempRuleText.replace(linkText, HYPERLINK_SEPARATOR);
    });

    const textParts = tempRuleText.split(HYPERLINK_SEPARATOR);

    return (
      <p>
        {textParts.map((text, index) => (
          <span key={index}>
            {text}
            {hyperLinks[index] && <Link to={toPath(hyperLinks[index])}>{hyperLinks[index]}</Link>}
          </span>
        ))}
      </p>
    );
  };

  return foundHyperLink ? renderRuleTextWithHyperLink() : <p>{ruleText}</p>;
};
export default Rule;
