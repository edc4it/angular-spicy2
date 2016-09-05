import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {NgModule} from "@angular/core";
import {RecipeFilterPipe} from "./recipes-list/recipe-filter.pipe";
import {RecipeService} from "./recipe-service/recipe-service";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {SearchComponent} from "./search/search.component";
import {AddReviewComponent} from "./reviews/add-review-component";

@NgModule({
    imports:      [BrowserModule, FormsModule, routing,  HttpModule, ReactiveFormsModule ],
    bootstrap:    [AppComponent],
    declarations: [RecipesListComponent, SearchComponent, AppComponent, AddReviewComponent, RecipeFilterPipe],
    providers :   [RecipeService]
})
export class AppModule {}