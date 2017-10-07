function getFirstSelector(selectors){
  return document.querySelector(selectors)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
  let ranked = document.querySelectorAll('.ranked-list')
    for (let i = 0, l = ranked.length; i < l; i++){
      ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
    }
}

function deepestChild(){
  let start = document.getElementById('grand-node')
  let child = first.querySelector('div')
  while (child){
    start = child
    child = start.querySelector('div')
  }
  return start
}
