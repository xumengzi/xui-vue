const removeAllDom = function(list){
  if(list){
    [...list].forEach((item) => {
      item.remove();
    })
  }
}

const dispatch = (componentName, eventName, params) =>{
  var parent = this.$parent || this.$root;
  var name = parent.$options.componentName;

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.componentName;
    }
  }
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params));
  }
};

const setHidden = (bool) =>{
  document.body.style.overflow = bool ? "hidden" : "initial";
  document.getElementsByTagName("html")[0].style.overflow = bool
    ? "hidden"
    : "initial";
}

export {
  removeAllDom,
  dispatch,
  setHidden
}