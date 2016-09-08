import {Component, OnInit} from "@angular/core";
import {RecipeService} from "../recipe-service/recipe-service";
import {Recipe} from "../recipe-service/recipe";
import {Router, ActivatedRoute} from "@angular/router";
import {ToasterService} from "angular2-toaster/angular2-toaster";

@Component({
    template: require("./recipes-details.component.html"),
    styles: [require("./recipes-details.component.scss")],
})
export class RecipeDetailsComponent implements OnInit  {

    private recipe : Recipe;
    private subription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private toasterService: ToasterService,
        private recipeService: RecipeService ) {
    }

    ngOnInit(): void {

        this.subription = this.route.params
            .map(params => params["id"])
            .switchMap(id => this.recipeService.get(id))
            .subscribe(
                recipe => this.recipe= recipe,
                e => {
                    this.toasterService.pop('error', 'Oops', e);
                    this.navToList()
                }
            );
    }

    ngOnDestroy() {
        this.subription.unsubscribe();
    }


    private navToList() {
        this.router.navigate(["recipe-list"])
    }
}