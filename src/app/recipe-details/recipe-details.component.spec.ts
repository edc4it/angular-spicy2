import {ComponentFixture, TestBed, async} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {RecipeDetailsComponent} from "./recipe-details.component";
import {ActivatedRoute, Router} from "@angular/router";
import {By} from "@angular/platform-browser";
import {ActivatedRouteStub} from "../util/test/router-stubs";
import {AppModule} from "../app.modules";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {XHRBackend, Response, ResponseOptions} from "@angular/http";
describe('Recipe details component', () => {

    let fixture: ComponentFixture<RecipeDetailsComponent>
    let de: DebugElement
    const activatedRoute = new ActivatedRouteStub();

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {provide: Router, useValue: {}},
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: XHRBackend, useClass: MockBackend}]
        })

        fixture = TestBed.createComponent(RecipeDetailsComponent)
        de = fixture.debugElement
        setupBackend();

    });

    it('should display the details', async(() => {
        activatedRoute.testParams = {'id': 'f96cc6207a37ff777'}
        fixture.detectChanges() // call nginit
    fixture.whenStable().then(() => {

        fixture.detectChanges() // display UI
        const text = de.query(By.css('.recipe-title')).nativeElement.textContent;
        expect(text).toBe("Morrocan Carrot and Chickpea Salad")
    })
    }));

    function setupBackend () {
        const backend = TestBed.get(XHRBackend);

        const responseOptions = new ResponseOptions({
            status: 200,
            body: {
                "ingredients": [],
                "description": "A beauty of a carrot salad ...",
                "id": "5160756f96cc6207a37ff777",
                "title": "Morrocan Carrot and Chickpea Salad",
                "difficulty": 2,
                "reviews": []
            }
        });
        const response = new Response(responseOptions);
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
    }

})
