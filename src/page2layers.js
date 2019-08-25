import {nodeTreeToSketchPage} from '@brainly/html-sketchapp';

export function run(mainNode = document.body) {
  const page = nodeTreeToSketchPage(mainNode);

  page.setName(document.title);
  return page.toJSON();
}
