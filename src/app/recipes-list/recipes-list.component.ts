import {Component, OnInit} from "@angular/core";
import {SearchComponent} from "../search/search.component";
import {RecipeService} from "../recipe-service/recipe-service";
import {Recipe} from "../recipe-service/recipe";
import {Observable} from "rxjs";

@Component({
    selector: "spice-app",
    template: require("./recipes-list.component.html"),
    styles: [require("./recipes-list.component.scss")],
    directives: [SearchComponent]
})
export class RecipesListComponent implements OnInit {


    constructor(private recipeService: RecipeService) {
    }


    ngOnInit() {
        this.search(null);
    }

    private search(s: string) {
        this.recipes = this.recipeService.getAll(s);
    }

    recipes: Observable<[Recipe]>;

}
