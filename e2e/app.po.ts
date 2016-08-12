export class HappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('happ-app h1')).getText();
  }
}
