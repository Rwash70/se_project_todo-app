class Section {
  constructor({ item, renderer, containerSelector }) {
    this._item = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItem() {
    this._item.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
