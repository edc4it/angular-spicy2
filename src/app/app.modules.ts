import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {routing} from "./app.routing";
import {RecipeFilterPipe} from "./recipes-list/recipe-filter.pipe";
import {RecipeService} from "./recipe-service/recipe-service";
import {AppComponent} from "./app.component";
import {SearchComponent} from "./search/search.component";
import {AddReviewComponent} from "./reviews/add-review.component";
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

@NgModule({
    imports:      [BrowserModule, FormsModule, ToasterModule, routing,  HttpModule, ReactiveFormsModule ],
    bootstrap:    [AppComponent],
    declarations: [RecipesListComponent, SearchComponent, AppComponent, AddReviewComponent, RecipeFilterPipe, RecipeDetailsComponent],
    providers :   [RecipeService]
})
export class AppModule {}