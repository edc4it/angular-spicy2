import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ToasterService} from "angular2-toaster/angular2-toaster";
import {Subscription} from "rxjs/Subscription";
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe-service";

@Component({
    template: require("./recipes-details.component.html"),
    styles: [require("./recipes-details.component.scss")],
})
export class RecipeDetailsComponent implements OnInit  {

    @Input() recipe: Recipe;
    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private toasterService: ToasterService,
        private recipeService: RecipeService ) {
    }

    ngOnInit(): void {

        this.subscription = this.route.params
            .map((params) => params.id)
            .switchMap((id) => this.recipeService.get(id))
            .subscribe(
                (recipe) => this.recipe = recipe,
                (e) => {
                    console.error("problem fetching recipe", e.message);
                    this.toasterService.pop("error", "Oops", e.message);
                    this.navToList()
                }
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private navToList() {
        this.router.navigate(["recipe-list"])
    }
}