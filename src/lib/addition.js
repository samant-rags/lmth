function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  // const dataPanelNode = document.querySelector('.panel-content');
  // let shadowRootForm = dataPanelNode && dataPanelNode.childNodes[0].childNodes[0].shadowRoot;
  console.log(
    document.querySelectorAll(".panel-content")[0].childNodes[0].childNodes[0]
  );

  return a - b;
}
// named exports
export { plus, minus };
