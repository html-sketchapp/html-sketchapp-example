import Page from '@brainly/html-sketchapp/html2asketch/page';
import nodeToSketchLayers from '@brainly/html-sketchapp/html2asketch/nodeToSketchLayers';

export function run() {
  const page = new Page({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight
  });

  page.setName(document.title);

  const waitingForLayers = Array.from(document.querySelectorAll('*')).map(nodeToSketchLayers);

  return Promise.all(waitingForLayers)
    .then(layers => {
      layers
        .reduce((prev, current) => prev.concat(current), [])//single node can produce multiple layers - concatenate them
        .forEach(layer => page.addLayer(layer));

      return page.toJSON();
    });
}
