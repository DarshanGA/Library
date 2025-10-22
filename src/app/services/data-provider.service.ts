import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Navs } from '../models/Navs.model';
import { AppJsonDataStructure } from '../models/JsonData.model';
import { AppPages } from '../models/AppPages.model';
import { CodeContent } from '../models/CodeContent.model';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }

  private dataUrl = "assets/data/app-data.json";

  getAppHeaders(): Observable<Navs[]>{

    return this.http.get<AppJsonDataStructure>(this.dataUrl).pipe(

      map(data => data.navs)
    );
  }

  getGivenPageData(givenPage: AppPages): Observable<CodeContent[]> {

    return this.http.get<AppJsonDataStructure>(this.dataUrl).pipe(
      map(data => {
        if(givenPage === AppPages.JAVA)
          return data.java;
        else if(givenPage === AppPages.OTHERS)
          return data.others;
        else if(givenPage === AppPages.GIT)
          return data.git;
        else
          return data.angular
      })
    );
  }
}
