import {browser, by, element} from 'protractor';

describe("Simple e2e test", () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        const subject = browser.getTitle();
        expect(subject).toEqual('Angular Spice2');
    });

})