import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

import data from "../data/app-data.json";
import { Navs } from './models/Navs.model';
import { AngularInfoComponent } from "./angular/angular-info/angular-info.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'Library';
  navOptions: Navs[] = data.navs;

}
