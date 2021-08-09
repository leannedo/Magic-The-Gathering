export const toRulePath = (chapter: string, section: string, rule?: string): string => {
  if (!chapter || !section) {
    return '';
  }

  return rule
    ? `/section/${section}/chapter/${chapter}#${rule}`
    : `/section/${section}/chapter/${chapter}`;
};
