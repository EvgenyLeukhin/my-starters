import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';
import * as params from './stations/params';

const makeMenuStartScene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 0.1, {
    marginLeft: '40vw',
  }, {
    marginLeft: '40vw',
  });
  return new ScrollMagic.Scene({ triggerElement: '#start-scene-trigger', duration: 1000 })
    .setTween(roadOneTween);
};

const makeMenu1Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '40vw' }, { marginLeft: '20vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-1-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu2Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '20vw' }, { marginLeft: 0 });
  return new ScrollMagic.Scene({ triggerElement: '#station-2-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu3Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: 0 }, { marginLeft: '-20vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-3-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu4Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-20vw' }, { marginLeft: '-40vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-4-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu5Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-40vw' }, { marginLeft: '-60vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-5-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu6Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-60vw' }, { marginLeft: '-80vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-6-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu7Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-80vw' }, { marginLeft: '-100vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-7-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu8Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-100vw' }, { marginLeft: '-120vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-8-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu9Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-120vw' }, { marginLeft: '-140vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-9-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

const makeMenu10Scene = () => {
  const roadOneTween = TweenMax.fromTo('#menu', 1, { marginLeft: '-140vw' }, { marginLeft: '-160vw' });
  return new ScrollMagic.Scene({ triggerElement: '#station-10-trigger', duration: params.duration })
    .setTween(roadOneTween);
};

export default (container) => ([
  makeMenu1Scene().addTo(container),
  makeMenu2Scene().addTo(container),
  makeMenu3Scene().addTo(container),
  makeMenu4Scene().addTo(container),
  makeMenu5Scene().addTo(container),
  makeMenu6Scene().addTo(container),
  makeMenu7Scene().addTo(container),
  makeMenu8Scene().addTo(container),
  makeMenu9Scene().addTo(container),
  makeMenu10Scene().addTo(container),
  makeMenuStartScene().addTo(container),
]);
