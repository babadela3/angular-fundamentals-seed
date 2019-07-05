import { Component } from '@angular/core';

@Component({
    selector: "app-home",
    template: `
    <div class="app">
      Not found page, <a routerLink="/"> go home </a>!
    </div>
  `
})
export class NotFoundComponent{

}