import { AlexTransAngularPage } from './app.po';

describe('alex-trans-angular App', () => {
  let page: AlexTransAngularPage;

  beforeEach(() => {
    page = new AlexTransAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
