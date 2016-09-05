import {Component} from "@angular/core";
import {SearchComponent} from "../search/search.component";
import {RecipeService} from "../recipe-service/recipe-service";
import {Recipe} from "../recipe-service/recipe";
import {Observable, Subject} from "rxjs";

@Component({
    template: require("./recipes-list.component.html"),
    styles: [require("./recipes-list.component.scss")],
})
export class RecipesListComponent  {

    searchStream = new Subject<string>();

    constructor(private recipeService: RecipeService ) {
        this.recipes= this.searchStream.flatMap((s) => this.recipeService.getAll(s))
    }

    recipes: Observable<[Recipe]>;

}
