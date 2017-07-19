import { ApiConsumptionPage } from './app.po';

describe('api-consumption App', () => {
  let page: ApiConsumptionPage;

  beforeEach(() => {
    page = new ApiConsumptionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
