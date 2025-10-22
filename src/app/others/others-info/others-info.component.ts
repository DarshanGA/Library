import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from "../../common/page-title/page-title.component";
import { SubTitleNumbComponent } from "../../common/sub-title-numb/sub-title-numb.component";
import { HyperLinkComponent } from "../../common/hyper-link/hyper-link.component";
import { CodeComponent } from "../../common/code/code.component";
import { DataProviderService } from '../../services/data-provider.service';
import { AppPages } from '../../models/AppPages.model';
import { CodeContent } from '../../models/CodeContent.model';

@Component({
  selector: 'app-others-info',
  imports: [PageTitleComponent, SubTitleNumbComponent, HyperLinkComponent, CodeComponent],
  templateUrl: './others-info.component.html',
  styleUrl: './others-info.component.scss'
})
export class OthersInfoComponent implements OnInit{
  
  othersData: CodeContent[] = [];

  constructor(private dataService: DataProviderService) {}

  ngOnInit(): void {
    
    this.dataService.getGivenPageData(AppPages.OTHERS).subscribe(data => {
      this.othersData = data;
    });
  }
}
