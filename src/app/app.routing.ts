import {RouterModule, Routes} from "@angular/router";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {AddReviewComponent} from "./reviews/add-review.component";

const routes: Routes = [
    {
        path: "recipe-list",
        component: RecipesListComponent
    },
    {
        path: "recipe/:id",
        component: RecipeDetailsComponent
    },
    {
        path: "review/add",
        component: AddReviewComponent
    },
    {
        path: "",
        redirectTo: "/recipe-list",
        pathMatch: "full"
    }
];

export const routing = RouterModule.forRoot(routes);