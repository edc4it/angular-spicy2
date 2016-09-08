import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'spice-app',
    template: `
      <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
            <div class="container">
                <a class="navbar-brand" href="/">Spicy Angular</a>
            </div>
       </nav>
       <toaster-container></toaster-container>
       <router-outlet></router-outlet>
    `
})
export class AppComponent {


}