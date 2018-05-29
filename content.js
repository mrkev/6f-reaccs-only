
// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   // images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//   images[i].src = chrome.runtime.getURL('/img/test.png');
// }

// function getElementByXpath(path) {
//   return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
// }

// const elem = getElemen tByXpath('//*[@id="js_h2"]/a/span[1]/i');

console.log('BOI2');

// document.onmouseover

// const CLASS_NAME = 'hasLeftCol _2yq home composerExpanded _5vb_ fbx _-kb apple _61s0 _605a p_1qah8w1n_x chrome webkit mac x2 Locale_en_US cores-gte4 hasAXNavMenubar _19_u vsc-initialized';

// new Array(document.getElementsByClassName(CLASS_NAME)).forEach(x => {
//   const f = x.onmouseover;
//   x.onmouseover = function () {
//     console.log('HERE');
//     f();
//   };
// });

// const f = document.body.onmouseover;
// document.body.onmouseover = function () {
//   console.log('x3');
// };

// document.getElementById('bo').onmouseover;

let pause = false;
let test = null;

document.body.addEventListener('DOMNodeInserted', function (ev) {
  // console.log('TEST', ev);
  if (pause) return;
  if (ev.path[0].nodeName === 'CANVAS') console.log('CANVAS', ev.path[0]);
  else {
    return;
  }

  pause = true;
  const canvas = ev.path[0];
  const parent = ev.path[1];

  if (!test) test = canvas;

  // parent.replaceChild(test, canvas);

  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);

  var oImg = document.createElement('img');
  oImg.setAttribute('src', chrome.runtime.getURL('/img/test.png'));
  oImg.setAttribute('alt', 'na');
  oImg.setAttribute('height', '80px');
  oImg.setAttribute('width', '80px');
  parent.replaceChild(oImg, canvas);
  pause = false;
}, false);