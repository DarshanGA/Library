import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from "../../common/page-title/page-title.component";
import { SubTitleNumbComponent } from "../../common/sub-title-numb/sub-title-numb.component";
import { CodeComponent } from "../../common/code/code.component";
import { CodeContent } from '../../models/CodeContent.model';
import { DataProviderService } from '../../services/data-provider.service';
import { AppPages } from '../../models/AppPages.model';

@Component({
  selector: 'app-git-info',
  imports: [PageTitleComponent, SubTitleNumbComponent, CodeComponent],
  templateUrl: './git-info.component.html',
  styleUrl: './git-info.component.scss'
})
export class GitInfoComponent implements OnInit{

  gitCommands: CodeContent [] = [];

  constructor(private dataService: DataProviderService) {}

  ngOnInit(): void {
    
    this.dataService.getGivenPageData(AppPages.GIT).subscribe(data => {
      this.gitCommands = data;
    });
  }
    
}
