import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/datas.service'
 
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    this._dataService.getData();
  }
}
