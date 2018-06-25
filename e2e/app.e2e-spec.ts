import { ManishAngularHomePage } from './app.po';

describe('manish-angular-home App', function() {
  let page: ManishAngularHomePage;

  beforeEach(() => {
    page = new ManishAngularHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
