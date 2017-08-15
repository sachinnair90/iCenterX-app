import { IcenterxPage } from './app.po';

describe('icenterx App', () => {
  let page: IcenterxPage;

  beforeEach(() => {
    page = new IcenterxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
