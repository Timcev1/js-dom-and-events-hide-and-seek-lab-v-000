function getFirstSelector(selectors){
  return document.querySelector(selectors)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
  let ranked = document.querySelectorAll(`.ranked-list`)
    for (let i = 0, l = ranked.length; i < l; i++){
      let child = ranked[i].child
      for (let j = 0, c = child.length; j < k; j++) {
        child[j].innerHTML = parseInt(child[j].innerHTML) + n
      }
    }
}

function deepestChild(){

}
