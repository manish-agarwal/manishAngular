import { ManishAngularPage } from './app.po';

describe('manish-angular App', function() {
  let page: ManishAngularPage;

  beforeEach(() => {
    page = new ManishAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
