// Commented out due to issues with loading animations. 
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from(".left-div", {
//     duration: 2,
//     x: -1000,
//     opacity: 0,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".left-div",
//       start: "top 80%",
//       end: "top 30%",
//       toggleActions: "play none none none", // فقط پخش می‌شود
//     },
//   });

//   gsap.from(".right-div", {
//     duration: 2,
//     x: 1000,
//     opacity: 0,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".right-div",
//       start: "top 80%",
//       end: "top 30%",
//       toggleActions: "play none none none", // فقط پخش می‌شود
//     },
//   });

//   gsap.from(".bottom-div", {
//     duration: 2,
//     y: 1000,
//     opacity: 0,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".bottom-div",
//       start: "top 80%",
//       end: "top 30%",
//       toggleActions: "play none none none",
//     },
//   });
// });
