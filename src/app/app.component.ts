import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

import data from "../data/app-data.json";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent]
})
export class AppComponent {
  title = 'Library';
  navOptions = data.navs;

}
