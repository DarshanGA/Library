import { Component } from '@angular/core';
import { CodeComponent } from "../../common/code/code.component";
import { PageTitleComponent } from "../../common/page-title/page-title.component";
import { SubTitleNumbComponent } from "../../common/sub-title-numb/sub-title-numb.component";

@Component({
  selector: 'app-angular-info',
  imports: [CodeComponent, PageTitleComponent, SubTitleNumbComponent],
  templateUrl: './angular-info.component.html',
  styleUrl: './angular-info.component.scss'
})
export class AngularInfoComponent {

  sampleData = "<div [ngClass]=\"{ 'col-md-6': true, 'col-12': false }\">\n  ... \n</div>";
}
