import {browser, by, element} from 'protractor';
import {elementAt} from "rxjs/operator/elementAt";

describe("Simple e2e test", () => {

    beforeEach(() => {
        browser.get("/");
    });

    it("should have a title", () => {
        const subject = browser.getTitle();
        expect<any>(subject).toEqual("Angular Spice4");
    });

    it("should allow a user to navigate", () => {
        element.all(by.css("article")).first().click()
        const text = element(by.css(".recipe-title")).getText();
        expect(text).toContain("Onion Dip Recipe");
    });

})