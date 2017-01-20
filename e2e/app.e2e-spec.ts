import { ElectronMEANBoilerplatePage } from './app.po';

describe('electron-mean-boilerplate App', function() {
  let page: ElectronMEANBoilerplatePage;

  beforeEach(() => {
    page = new ElectronMEANBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
