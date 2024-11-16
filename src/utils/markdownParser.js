import { remark } from 'remark';
import html from 'remark-html';

export const parseMarkdown = async (markdown) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};
