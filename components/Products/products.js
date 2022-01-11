class Products {
  render() {
    let htmlCatalod = "";
    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalod += `
        <li сlass="products-element" id="products-element">
          <span сlass="products-element__name"  id="products-element__name">${name}</span>
          <img src="${img}" сlass="products-element__img"  id="products-element__img"/>
          <span сlass="products-element__price"  id="products-element__price">
            ⚡ ${price.toLocaleString()} USD
          </span>
          <button сlass="products-element__btn"  id="products-element__btn">Добавить в корзину</button>
        </li>`;
    });

    const html = `
    <ul сlass="products-container1"  id="products-container">
      ${htmlCatalod}
    </ul>`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
