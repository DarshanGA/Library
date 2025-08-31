import { NgClass } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navs } from '../models/Navs.model';


@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input({required: true}) navOptions!:Navs[];
  currentActiveIndex = signal<number>(-1);

  linkClicked(clickIndex: number){

    this.currentActiveIndex.set(clickIndex);
  }
}
