import { Component, OnInit } from '@angular/core';
import { CodeComponent } from "../../common/code/code.component";
import { PageTitleComponent } from "../../common/page-title/page-title.component";
import { SubTitleNumbComponent } from "../../common/sub-title-numb/sub-title-numb.component";
import { CodeContent } from '../../models/CodeContent.model';
import { DataProviderService } from '../../services/data-provider.service';
import { HyperLinkComponent } from "../../common/hyper-link/hyper-link.component";
import { AppPages } from '../../models/AppPages.model';

@Component({
  selector: 'app-angular-info',
  imports: [CodeComponent, PageTitleComponent, SubTitleNumbComponent, HyperLinkComponent],
  templateUrl: './angular-info.component.html',
  styleUrl: './angular-info.component.scss'
})
export class AngularInfoComponent implements OnInit {

  angularPageData: CodeContent[] = [];

  constructor(private dataService:DataProviderService){}
  
  ngOnInit(): void {

    this.dataService.getGivenPageData(AppPages.ANGULAR).subscribe(response => {

      this.angularPageData = response;
    });
  }
}
