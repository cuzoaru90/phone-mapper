import { PhoneMapperPage } from './app.po';

describe('phone-mapper App', () => {
  let page: PhoneMapperPage;

  beforeEach(() => {
    page = new PhoneMapperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
