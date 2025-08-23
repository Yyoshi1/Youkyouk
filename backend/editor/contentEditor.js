class ContentEditor {
  constructor() {
    this.pages = [];
  }

  createPage(name, blocks = []) {
    const page = { id: Date.now(), name, blocks };
    this.pages.push(page);
    return page;
  }

  addBlock(pageId, block) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) throw new Error('Page not found');
    page.blocks.push(block);
    return page;
  }

  getPage(pageId) {
    return this.pages.find(p => p.id === pageId);
  }
}

module.exports = new ContentEditor();
