import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent {

  @Input({required: true}) titleText!:string;
}
