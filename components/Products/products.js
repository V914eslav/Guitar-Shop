class Products {
  render() {
    let htmlCatalod = "";
    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalod += `
        <li>
          <span>${name}</span>
          <img src="${img}"/>
          <span>${name}</span>
          <button>Добавить в корзину</button>
        </li>`;
    });
    const html = `
    <ul>
      ${htmlCatalod}
    </ul>`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
