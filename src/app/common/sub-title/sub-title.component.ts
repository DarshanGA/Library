import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  imports: [],
  templateUrl: './sub-title.component.html'
})
export class SubTitleComponent {

  @Input({required: true}) content!:string;
}
