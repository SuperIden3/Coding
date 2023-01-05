class Dialog {
  constructor(_innerHTML) {
    const element = document.createElement("dialog");
    this.element = element;
    element.innerHTML = _innerHTML;
    document.body.appendChild(element);
  }
  show() {
    this.element.show();
  }
  showModal() {
    this.element.showModal();
  }
  close() {
    this.element.close();
  }
}
