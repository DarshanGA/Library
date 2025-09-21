import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title-numb',
  imports: [],
  templateUrl: './sub-title-numb.component.html'
})
export class SubTitleNumbComponent {

  @Input({required: true}) content!:string;
  @Input({required: true}) number!:string;
}
