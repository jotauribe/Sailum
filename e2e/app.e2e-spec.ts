import { SailumPage } from './app.po';

describe('sailum App', () => {
  let page: SailumPage;

  beforeEach(() => {
    page = new SailumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
