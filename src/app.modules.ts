import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RecipesListComponent} from "./app/recipes-list/recipes-list.component";
import {NgModule} from "@angular/core";
import {RecipeFilterPipe} from "./app/recipes-list/recipe-filter.pipe";
import {RecipeService} from "./app/recipe-service/recipe-service";

@NgModule({
    imports:      [BrowserModule, FormsModule, HttpModule ],
    bootstrap:    [RecipesListComponent],
    declarations: [RecipesListComponent, RecipeFilterPipe],
    providers :   [RecipeService]
})
export class AppModule {}