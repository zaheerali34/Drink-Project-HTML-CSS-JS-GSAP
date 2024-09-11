function OneAnim() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 100%",
      end: "50% 30%",
      scrub: true,
    },
  });

  tl.to(
    ".OneImg",
    {
      top: "130%",
      left: "4%",
      rotate: "30deg",
    },
    "a"
  );

  tl.to(
    ".TwoImg",
    {
      top: "-20%",
      rotate: "-20deg",
    },
    "a"
  );
}
OneAnim();

function TwoAnim() {
  var tlTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "20% 50%",
      scrub: true,
    },
  });

  tlTwo.to(".OneImg", {
    width: "30%",
    top: "203%",
    left: "0",
    rotate: "0deg",
  });
}

TwoAnim();
