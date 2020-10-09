import { Component, OnInit } from '@angular/core';

import { URL } from '../../services/globals';
import { DataService } from '../../services/datas.service';
import { IProject } from '../../models/Project';
 
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<IProject>;
  url: String;

  constructor(private _dataService : DataService) {
    this.projects = new Array();
    this.url= URL;
  }

  ngOnInit(){
    this.getProjects();
  }
  
  // This method call the getProjects() service from data.service.ts.
  // The service is obtained throught a request to the api rest.
  // In case of a successfull request the service returns the list of projects
  getProjects(){
    this._dataService.getProjects().subscribe(
      response => {
        if(response.projects) this.projects = response.projects;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
