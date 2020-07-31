const removeAllDom = function(list){
  if(list){
    [...list].forEach((item) => {
      item.remove();
    })
  }
};

export {
  removeAllDom,
}