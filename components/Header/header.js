class Header {
  handleOpenShoppingPage() {
    shoppingPage.render();
  }
  render(count) {
    const html = `
    <div class="header-container">
      <div class="header-counter" onClick="headerPage.handleOpenShoppingPage();">
        🔥${count}
      </div>
    </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();

const producsStore = localStorageUtil.getProducts();

headerPage.render(producsStore.length);
