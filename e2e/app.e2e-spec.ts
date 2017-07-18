import { NasaPage } from './app.po';

describe('nasa App', () => {
  let page: NasaPage;

  beforeEach(() => {
    page = new NasaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
