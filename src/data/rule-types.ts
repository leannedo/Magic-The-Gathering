type ChapterContent = {
  [ruleIdx: string]: string;
};

type Chapter = {
  title: string;
  content: ChapterContent;
};

type SectionContent = {
  [chapterIdx: string]: Chapter;
};

export type Section = {
  title: string;
  content: SectionContent;
};

export type GameRules = {
  [sectionIdx: string]: Section;
};
