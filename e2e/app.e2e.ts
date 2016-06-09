import { Fb1Page } from './app.po';

describe('fb1 App', function() {
  let page: Fb1Page;

  beforeEach(() => {
    page = new Fb1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fb1 works!');
  });
});
