import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    const h2 = element(by.id('titulo'))
    const texto = h2.getText();
    expect(texto).toEqual('Inicio de Sesion');
  });

  it('should login to the application', () => {
    page.navigateTo();
    const email = element(by.name('email'));
    const pwd = element(by.name('password'));
    const button = element(by.id('submit'));

    email.sendKeys('lorem@email.com');
    pwd.sendKeys('123456');
    button.click();

    browser.wait(() => {
      const h2 = element(by.id('header'));
      return h2.getText();
    }, 5000);

    expect(element(by.id('header')).getText()).toEqual('Peliculas');
  })

  it('should fail to login', () => {
    page.navigateTo();
    const email = element(by.name('email'));
    const pwd = element(by.name('password'));
    const button = element(by.id('submit'));

    email.sendKeys('lorem@email.com');
    pwd.sendKeys('1234567');
    button.click();

    browser.wait(() => {
      const errorElement = element(by.id('errorMsg'));
      return errorElement.getText();
    },5000);

    expect(element(by.id('errorMsg')).getText()).toEqual('Credenciales incorrectas');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
