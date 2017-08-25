import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/observable/from";
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

    constructor(private http: Http) {
    }

    getAll(titlePattern: string): Observable<[Recipe]> {

        const params = new URLSearchParams();
        params.set("sort", "datePublished");
        if (titlePattern && titlePattern.length > 0) {
            params.set("titlePattern", titlePattern);
        }
        return this.http.get("http://localhost:5000/api/recipes", {
            search : params
        }).map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error));

    }

    get(id: string): Observable<Recipe> {
        return this.http.get("http://localhost:5000/api/recipes/" + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

}