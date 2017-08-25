import {Component, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe-service";

@Component({
    template: require("./recipes-list.component.html"),
    styles: [require("./recipes-list.component.scss")],
})
export class RecipesListComponent  implements OnInit {
    searchStream = new Subject<string>();

    recipes: Observable<[Recipe]>;

    constructor(private recipeService: RecipeService ) {

    }

    ngOnInit(): void {
        this.recipes = this.searchStream.flatMap((s) => {
            return this.recipeService.getAll(s);
        });
        setTimeout(() => this.searchStream.next(""), 0)
    }
}
