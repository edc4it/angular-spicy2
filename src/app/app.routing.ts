import {Routes, RouterModule} from "@angular/router";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {EditCommentComponent} from "./comments/edit-comment-component";

const routes: Routes = [
    {
        path: 'recipe-list',
        component: RecipesListComponent
    },
    {
        path: 'comments/edit',
        component: EditCommentComponent
    },
    {
        path: '',
        redirectTo: '/recipe-list',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);