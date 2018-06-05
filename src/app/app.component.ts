import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";


declare var $:any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app works!';
}
