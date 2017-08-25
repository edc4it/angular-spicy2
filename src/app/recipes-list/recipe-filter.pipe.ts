import { Pipe, PipeTransform } from "@angular/core";
import { Recipe } from "../recipe-service/recipe";

@Pipe({name: "recipeFilter", pure : false})
export class RecipeFilterPipe implements PipeTransform {
    transform(recipes: Recipe[], text: string) {
        return recipes.filter((r) => (text === "") || (r.title.toLowerCase().indexOf(text.toLowerCase()) > -1));
    }
}
