import { NgClass } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input({required: true}) navOptions!:string[];
  currentActiveIndex = signal<number>(0);

  linkClicked(clickIndex: number){

    this.currentActiveIndex.set(clickIndex);
  }
}
