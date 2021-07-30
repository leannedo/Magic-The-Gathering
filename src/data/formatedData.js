import data from './magic-comp-rules.txt';

const isSection = (str) => {
  const sectionRegex = /^[0-9]{1,2}\./;

  return sectionRegex.test(str);
};

const isChapter = (str) => {
  const chapterRegex = /^[0-9]{3,}(?!\.[0-9])/;

  return chapterRegex.test(str);
};

const isRule = (str) => {
  const ruleRegex = /^[0-9]{3,}\.[0-9]+[a-z]?/;

  return ruleRegex.test(str);
};

export const formatedData = () => {
  const sanitizedData = data
    .split(/(\r\n\s?\r\n)/)
    .filter((l) => !/\r\n\s?\r\n/.test(l))
    .map((l) => l.replace('\r\n', ''));

  const gameRules = sanitizedData.slice(
    sanitizedData.indexOf('Credits') + 1,
    sanitizedData.length + 1,
  );

  const MagicTheGathering = {};

  gameRules.forEach((line) => {
    if (isSection(line)) {
      const sectionIdx = line.match(/^[0-9]{1,2}\./)[0];
      const text = line.replace(sectionIdx, '').trim();

      MagicTheGathering[sectionIdx.replace('.', '')] = {
        title: text,
        content: {},
      };
    } else if (isChapter(line)) {
      const chapterIdx = line.match(/^[0-9]{3,}(?!\.[0-9])/)[0];
      const text = line.replace(chapterIdx, '').replace('.', '').trim();
      const sectionIdx = chapterIdx.slice(0, chapterIdx.length - 2);

      MagicTheGathering[sectionIdx] = {
        ...MagicTheGathering[sectionIdx],
        content: {
          ...MagicTheGathering[sectionIdx].content,
          [chapterIdx]: {
            title: text,
            content: {},
          },
        },
      };
    } else if (isRule(line)) {
      const ruleIdx = line.match(/^[0-9]{3,}\.[0-9]+[a-z]?/)[0];
      const text = line.replace(ruleIdx, '').replace('.', '').trim();

      const ruleParts = ruleIdx.split('.');
      const chapterIdx = ruleParts[0];
      const sectionIdx = chapterIdx.slice(0, chapterIdx.length - 2);

      if (!MagicTheGathering[sectionIdx].content[chapterIdx]) {
        return;
      }

      MagicTheGathering[sectionIdx] = {
        ...MagicTheGathering[sectionIdx],
        content: {
          ...MagicTheGathering[sectionIdx].content,
          [chapterIdx]: {
            ...MagicTheGathering[sectionIdx].content[chapterIdx],
            content: {
              ...MagicTheGathering[sectionIdx].content[chapterIdx].content,
              [ruleIdx]: text,
            },
          },
        },
      };
    }
  });

  console.log(MagicTheGathering);
};
