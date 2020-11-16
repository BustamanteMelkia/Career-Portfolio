import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../services/datas.service';
import { IProject } from '../../models/Project';
import { URL } from '../../services/globals';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  url: String;
  project : IProject;
  confirm: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private _router: Router
  ) {
    this.url = URL;
    this.confirm = false;
  }

  ngOnInit(): void {
    // get param: project id
    let id;
    this.activatedRoute.params.subscribe(params =>{
      id = params.id;
    })
    this.getProject(id);
  }

  getProject(id: String){
    this.dataService.getProject(id).subscribe(response=>{
      if(response.project){
        this.project= response.project;
      }
    }, error=>{
      console.log("Error: "+<any>error);
    });
  }
  
  deleteProject(){
    this.dataService.deleteProject(this.project._id).subscribe(
      response=>{
        if(response.project){
          console.log("Eliminado");
          this._router.navigate(['/projects']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm: boolean){
    this.confirm= confirm
  }
}
