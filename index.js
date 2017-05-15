function getFirstSelector(selector) {
  const result = document.querySelector(selector);
  return result
}

function nestedTarget() {
  const target = document.querySelector('#nested .target')
  return target
}

function increaseRankBy(n) {
  const value = parseInt(n, 10)
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (i + value).toString()
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
