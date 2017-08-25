import {Component, Output, EventEmitter, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector : "recipe-search",
    inputs : ["placeholder"],
    template : `
      <div class="searchForm">
        <input type="text" [placeholder]="placeholder" [formControl]="searchControl"/>
      </div>
    `
})
export class SearchComponent {

    searchControl = new FormControl();

    @Output()
    searchValueChange = new EventEmitter<string>();

    constructor() {
        this.searchControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((event) => this.searchValueChange.emit(event));
    }
}
