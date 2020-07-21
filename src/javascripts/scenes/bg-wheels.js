import ScrollMagic from 'scrollmagic';
import {
  Linear,
  TweenMax,
  TimelineLite,
  Power1,
} from 'gsap';
import SizeCalculator from '../helpers/size-calculator';

const makeWheelsRoadScene = (roadNumber) => {
  const sizeCalculator = new SizeCalculator(document.getElementById('train'), 1.6);
  const { em } = sizeCalculator;

  const wheelsTween = TweenMax.fromTo('.train-wheel', 1, {
    rotation: 0,
  }, {
    rotation: 360,
    duration: 0.5,
    ease: Linear.easeNone,
    repeat: 10,
  });

  const pusherWheelsLinkTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.to('.train-pusher-wheels-link', 1, {
        delay: 0.75,
        repeat: 10,
        bezier: {
          type: 'quadratic',
          values: [
            {
              x: 0,
              y: 0,
            },
            {
              x: em(20),
              y: 0,
            },
            {
              x: em(20),
              y: em(20),
            },
            {
              x: em(20),
              y: em(40),
            },
            {
              x: 0,
              y: em(40),
            },
            {
              x: em(-20),
              y: em(40),
            },
            {
              x: em(-20),
              y: em(20),
            },
            {
              x: em(-20),
              y: 0,
            },
            {
              x: 0,
              y: 0,
            },
          ],
        },
        ease: Linear.easeNone,
      }),
    ]);

  const mainPusherTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.to('#train-pusher-main', 1, {
        repeat: 10,
        bezier: {
          type: 'quadratic',
          values: [
            {
              x: 0,
              y: 0,
              rotation: 6.5,
            },
            {
              x: em(20),
              y: 0,
              rotation: 6.5,
            },
            {
              x: em(20),
              y: em(20),
              rotation: 0,
            },
            {
              x: em(20),
              y: em(40),
              rotation: -5,
            },
            {
              x: 0,
              y: em(40),
              rotation: -5,
            },
            {
              x: em(-20),
              y: em(40),
              rotation: -5,
            },
            {
              x: em(-20),
              y: em(20),
              rotation: 0,
            },
            {
              x: em(-20),
              y: 0,
              rotation: 6.5,
            },
            {
              x: 0,
              y: 0,
              rotation: 6.5,
            },
          ],
        },
        ease: Linear.easeNone,
      }),
    ]);

  const smallPusherTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.to('#train-pusher-small', 1, {
        repeat: 10,
        delay: 0.25,
        bezier: {
          type: 'quadratic',
          values: [
            {
              x: 0,
              y: 0,
              rotation: 0,
            },
            {
              x: em(10),
              y: 0,
              rotation: 0,
            },
            {
              x: em(10),
              y: em(10),
              rotation: -5,
            },
            {
              x: em(10),
              y: em(20),
              rotation: -8,
            },
            {
              x: 0,
              y: em(20),
              rotation: -8,
            },
            {
              x: em(-10),
              y: em(20),
              rotation: -8,
            },
            {
              x: em(-10),
              y: em(10),
              rotation: -5,
            },
            {
              x: em(-10),
              y: 0,
              rotation: 0,
            },
            {
              x: 0,
              y: 0,
              rotation: 0,
            },
          ],
        },
        ease: Linear.easeNone,
      }),
    ]);

  const hummerTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.to('#train-hummer', 0.5, {
        delay: 0.25,
        repeat: 20,
        x: em(-40),
        yoyo: true,
        ease: Power1.easeInOut,
      }),
    ]);

  const slevTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.fromTo('#train-slev', 0.5, {
        rotation: -17,
      }, {
        delay: 0.5,
        repeat: 20,
        rotation: 20,
        yoyo: true,
        ease: Power1.easeInOut,
      }),
    ]);

  const rblevTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.fromTo('#train-rblev', 0.5, {
        rotation: 19,
      }, {
        delay: 0.75,
        repeat: 20,
        rotation: -17,
        yoyo: true,
        ease: Power1.easeInOut,
      }),
    ]);

  const rslevTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.fromTo('#train-rslev', 0.5, {
        x: 0,
      }, {
        delay: 0.25,
        repeat: 20,
        x: em(-35),
        yoyo: true,
        ease: Power1.easeInOut,
      }),
      TweenMax.fromTo('#train-rslev', 0.5, {
        rotation: 14,
      }, {
        delay: 0.75,
        repeat: 20,
        rotation: 19,
        yoyo: true,
        ease: Power1.easeInOut,
      }),
    ]);

  const topbarTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.fromTo('#train-topbar', 0.5, {
        rotation: -116,
      }, {
        delay: 0.75,
        repeat: 20,
        rotation: -85,
        yoyo: true,
        ease: Power1.easeInOut,
      }),
    ]);

  const toplevTimeline = new TimelineLite({
    duration: 0.5,
  })
    .add([
      TweenMax.fromTo('#train-toplev', 0.5, {
        x: em(5),
        rotation: -3,
      }, {
        delay: 0.75,
        repeat: 20,
        x: em(-5),
        rotation: -4,
        yoyo: true,
        ease: Power1.easeInOut,
      }),
    ]);

  const wheelsTimeline = new TimelineLite()
    .add([
      wheelsTween,
      pusherWheelsLinkTimeline,
      mainPusherTimeline,
      smallPusherTimeline,
      hummerTimeline,
      slevTimeline,
      rblevTimeline,
      rslevTimeline,
      topbarTimeline,
      toplevTimeline,
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#road-trigger-${roadNumber}`,
    duration: roadNumber !== 10 ? 7000 : 3000,
  })
    .setTween(wheelsTimeline);
};


// const makeWheelsStationsScene = (stationNumber) => {
//   const wheelsTween = TweenMax.to(obj, 0.5,
//     {
//       curImg: images.length - 1,
//       roundProps: 'curImg',
//       repeat: 3,
//       immediateRender: true,
//       ease: Linear.easeNone,
//       onUpdate: () => {
//         document.getElementById('wheels')
//           .setAttribute('src', images[obj.curImg]); // set the image source
//       },
//     });
//
//   return new ScrollMagic.Scene({
//     triggerElement: `#station-${stationNumber}-trigger`,
//     duration: '350%',
//   })
//     .setTween(wheelsTween);
// };

//
// const makeWheelsStartScene = () => {
//   const wheelsTween = TweenMax.to(obj, 0.5,
//     {
//       curImg: images.length - 1,
//       roundProps: 'curImg',
//       repeat: 3,
//       immediateRender: true,
//       ease: Linear.easeNone,
//       onUpdate: () => {
//         document.getElementById('wheels')
//           .setAttribute('src', images[obj.curImg]); // set the image source
//       },
//     });
//
//   return new ScrollMagic.Scene({
//     triggerElement: '#start-scene-trigger',
//     duration: '350%',
//   })
//     .setTween(wheelsTween);
// };
//
// const makeWheelsEndScene = () => {
//   const wheelsTween = TweenMax.to(obj, 0.5,
//     {
//       curImg: images.length - 1,
//       roundProps: 'curImg',
//       repeat: 3,
//       immediateRender: true,
//       ease: Linear.easeNone,
//       onUpdate: () => {
//         document.getElementById('wheels')
//           .setAttribute('src', images[obj.curImg]); // set the image source
//       },
//     });
//
//   return new ScrollMagic.Scene({
//     triggerElement: '#end-scene-trigger',
//     duration: '350%',
//   })
//     .setTween(wheelsTween);
// };

export default (container) => ([
  // makeWheelsStartScene().addTo(container),
  // makeWheelsEndScene().addTo(container),
  // makeWheelsStationsScene(1).addTo(container),
  makeWheelsRoadScene(1).addTo(container),
  // makeWheelsStationsScene(2).addTo(container),
  makeWheelsRoadScene(2).addTo(container),
  // makeWheelsStationsScene(3).addTo(container),
  makeWheelsRoadScene(3).addTo(container),
  // makeWheelsStationsScene(4).addTo(container),
  makeWheelsRoadScene(4).addTo(container),
  // makeWheelsStationsScene(5).addTo(container),
  makeWheelsRoadScene(5).addTo(container),
  // makeWheelsStationsScene(6).addTo(container),
  makeWheelsRoadScene(6).addTo(container),
  // makeWheelsStationsScene(7).addTo(container),
  makeWheelsRoadScene(7).addTo(container),
  // makeWheelsStationsScene(8).addTo(container),
  makeWheelsRoadScene(8).addTo(container),
  // makeWheelsStationsScene(9).addTo(container),
  makeWheelsRoadScene(9).addTo(container),
  // makeWheelsStationsScene(10).addTo(container),
  makeWheelsRoadScene(10).addTo(container),
]);
