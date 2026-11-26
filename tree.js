let tree = {
  left: null,
  count: 1,
  right: null,
  value: 10,
};

function preOrder(arvore) {
  console.log(arvore.value);
  arvore.left && preOrder(arvore.left);
  arvore.right && preOrder(arvore.right);
}

function inOrder(arvore) {
  arvore.left && inOrder(arvore.left);
  console.log(arvore.value);
  arvore.right && inOrder(arvore.right);
}

function posOrder(arvore) {
  arvore.left && posOrder(arvore.left);
  arvore.right && posOrder(arvore.right);
  console.log(arvore.value);
}

function insert(value, arvore) {
  if (value === arvore.value) {
    arvore.count++;
  } else if (value > arvore.value) {
    if (arvore.right === null) {
      arvore.right = {
        left: null,
        count: 1,
        right: null,
        value: value,
      };
    } else {
      arvore.right && insert(value, arvore.right);
    }
  } else if (value < arvore.value) {
    if (arvore.left === null) {
      arvore.left = {
        left: null,
        count: 1,
        right: null,
        value: value,
      };
    } else {
      arvore.left && insert(value, arvore.left);
    }
  }
}
