import { Component } from '@angular/core';
import { PageTitleComponent } from "../../common/page-title/page-title.component";
import { SubTitleComponent } from "../../common/sub-title/sub-title.component";
import { SubTitleNumbComponent } from "../../common/sub-title-numb/sub-title-numb.component";
import { HyperLinkComponent } from "../../common/hyper-link/hyper-link.component";

@Component({
  selector: 'app-others-info',
  imports: [PageTitleComponent, SubTitleNumbComponent, HyperLinkComponent],
  templateUrl: './others-info.component.html',
  styleUrl: './others-info.component.scss'
})
export class OthersInfoComponent {

}
