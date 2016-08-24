import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Recipe} from "./recipe";
import {Observable} from "rxjs";
import 'rxjs/add/observable/from';

@Injectable()
export class RecipeService {


    constructor(private http: Http) {
    }

    getAll(titlePattern : string): Observable<[Recipe]> {

        const params = new URLSearchParams();
        params.set("sort","datePublished");
        if (titlePattern) params.set("titlePattern",titlePattern);
        return this.http.get("http://localhost:5000/api/recipes", {
            search : params
        }).map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.message));

    }


}