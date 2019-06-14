function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  let rl = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rl.length; i++) {
    rl[i].innerHTML = parseInt(rl[i] + n);
  }
}

function deepestChild(){
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length- 1];
}
