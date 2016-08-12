import { HappPage } from './app.po';

describe('happ App', function() {
  let page: HappPage;

  beforeEach(() => {
    page = new HappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('happ works!');
  });
});
