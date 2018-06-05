import { ResumeMakerPage } from './app.po';

describe('resume-maker App', () => {
  let page: ResumeMakerPage;

  beforeEach(() => {
    page = new ResumeMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
