import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from "../../common/page-title/page-title.component";
import { SubTitleNumbComponent } from "../../common/sub-title-numb/sub-title-numb.component";
import { CodeContent } from '../../models/CodeContent.model';
import { DataProviderService } from '../../services/data-provider.service';
import { AppPages } from '../../models/AppPages.model';
import { CodeComponent } from "../../common/code/code.component";

@Component({
  selector: 'app-java-info',
  imports: [PageTitleComponent, SubTitleNumbComponent, CodeComponent],
  templateUrl: './java-info.component.html',
  styleUrl: './java-info.component.scss'
})
export class JavaInfoComponent implements OnInit{

  javaPageData: CodeContent[] = [];

  constructor(private dataService: DataProviderService){}
  
  ngOnInit(): void {
    
    this.dataService.getGivenPageData(AppPages.JAVA).subscribe(response => {

      this.javaPageData = response;
    });
  }
}
