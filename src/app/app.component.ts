import { Component, OnInit } from "@angular/core";

@Component({
    selector: "spice-app",
    template: `
       <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
           <a class="navbar-brand" href="/admin">Spicy Angular</a>
       </nav>
       <toaster-container></toaster-container>
       <router-outlet></router-outlet>
    `
})
export class AppComponent {

}