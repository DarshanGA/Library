import { NgClass } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navs } from '../models/Navs.model';
import { DataProviderService } from '../services/data-provider.service';


@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  navOptions!:Navs[];
  currentActiveIndex = signal<number>(-1);

  constructor(private appDataService: DataProviderService){}

  ngOnInit(): void {
    
    this.appDataService.getAppHeaders().subscribe(response => {
      
      this.navOptions = response;
    });
  }

  linkClicked(clickIndex: number){

    this.currentActiveIndex.set(clickIndex);
  }
}
