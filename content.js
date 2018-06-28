console.log('BOI2');

let pause = false;
let count = 0;

const imgs = ['ajay', 'seunghee', 'kevin', 'daniel', 'adi', 'aditi']
  .map(x => chrome.runtime.getURL(`/img/${x}.png`));

document.body.addEventListener('DOMNodeInserted', function (ev) {
  if (!(ev.path[0].nodeName === 'CANVAS')
    || !(ev.path[0].height === 78)
    || !(ev.path[0].width === 78)
    || pause) return;

  pause = true;

  const img = imgs[count++ % imgs.length];

  const canvas = ev.path[0];
  const parent = ev.path[1];

  var oImg = document.createElement('img');
  oImg.setAttribute('src', img);
  oImg.setAttribute('alt', 'na');
  oImg.setAttribute('height', '70px');
  oImg.setAttribute('width', '70px');
  parent.replaceChild(oImg, canvas);

  pause = false;

}, false);