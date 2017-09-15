import {Injectable} from "@angular/core";
import {Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/observable/from";
import {Recipe} from "./recipe";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RecipeService {

    constructor(private http: HttpClient) {
    }

    getAll(titlePattern: string): Observable<Recipe[]> {
        let httpParams = new HttpParams().set("sort", "datePublished");
        if (titlePattern && titlePattern.length > 0) {
            httpParams  = httpParams.set("titlePattern", titlePattern)
        }
        return this.http.get<Recipe[]>("http://localhost:5000/api/recipes", {
            params: httpParams
        })
    }

    get(id: string): Observable<Recipe> {
        return this.http.get<Recipe>("http://localhost:5000/api/recipes/" + id)
    }

}