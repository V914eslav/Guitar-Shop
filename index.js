function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// https://api.myjson.com/bins/esicc
//server/catalog.json
fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    // setTimeout(function () {
    //   spinnerPage.handleClear();
    //   render();
    // }, 1000);
    spinnerPage.handleClear();
    render();
  })
  .catch((error) => {
    console.log(error);
  });
