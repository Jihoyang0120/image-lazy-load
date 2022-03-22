document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  /* slice로 얕은 복사를 하고 call을 통해 매개변수로 document.querySelectorAll("img.lazy")를 넣으면 유사 배열인 Nodelist를 진짜 배열로 만들어 filter, forEach등의 Array.prototype 매서드 사용 가능 */
  let active = false;
  const lazyLoad = function () {
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyImages = lazyImages
          .map((lazyImage) => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              window.getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              return null;
            } else return lazyImage;
          })
          .filter((image) => image);
        if (!lazyImages.length) {
          document.removeEventListener("scroll", lazyLoad);
        } else active = false;
      }, 200);
    }
  };
  document.addEventListener("scroll", lazyLoad);
});
