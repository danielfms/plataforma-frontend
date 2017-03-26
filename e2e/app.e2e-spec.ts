import { PlataformaFrontendPage } from './app.po';

describe('plataforma-frontend App', () => {
  let page: PlataformaFrontendPage;

  beforeEach(() => {
    page = new PlataformaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
