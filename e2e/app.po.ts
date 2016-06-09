export class Fb1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fb1-app h1')).getText();
  }
}
