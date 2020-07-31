const xu = {
  isFunction(fn) {
    return typeof fn === 'function'
  },
  hasClass(source, target) {
    return source.indexOf(target) > -1;
  },
  isArray(arr) {
    return Array.isArray(arr);
  },
  isElementInViewport(el, offset = 0) {
    const box = el.getBoundingClientRect(),
      top = (box.top >= 0),
      left = (box.left >= 0),
      bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset),
      right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + offset);
    return (top && left && bottom && right);
  },
  isFunction(fn) {
    return typeof fn === 'function';
  },
  isMobile() {
    return 'ontouchstart' in window;
  },
}

export default xu;