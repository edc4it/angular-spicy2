import {Component, OnInit} from "@angular/core";
import {SearchComponent} from "../search/search.component";
import {RecipeService} from "../recipe-service/recipe-service";
import {Recipe} from "../recipe-service/recipe";
import {Observable, Subject} from "rxjs";

@Component({
    template: require("./recipes-list.component.html"),
    styles: [require("./recipes-list.component.scss")],
})
export class RecipesListComponent  implements OnInit {

    ngOnInit(): void {
        this.recipes = this.searchStream.flatMap((s) => {
            return this.recipeService.getAll(s);
        });
        setTimeout(()=>this.searchStream.next(""),0)
    }



    searchStream = new Subject<string>();

    constructor(private recipeService: RecipeService ) {

    }

    recipes: Observable<[Recipe]>;

}
