import { Ng2FormValidationPage } from './app.po';

describe('ng2-form-validation App', function() {
  let page: Ng2FormValidationPage;

  beforeEach(() => {
    page = new Ng2FormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
