import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { URL } from './globals'

import { IProject } from '../models/Project'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http : HttpClient) { }

  getData(){
    console.log("Service works");
  }

  saveProject(project: IProject): Observable<any>{
    // Convertir el parámetro project a JSON
    let params =JSON.stringify(project);
    console.log(params);
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(URL+'/save-project',params,{ headers:headers });
  }
  getProjects(): Observable<any>{
    return this._http.get(URL+'/projects');
  }
  getProject(projectId: String): Observable<any>{
    return this._http.get(URL+'/project/'+projectId);
  }
  deleteProject(projectId: String): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(URL+'/delete/'+projectId, {headers: headers});
  }

  updateProject(project): Observable<any>{
    let id = project._id;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let param = JSON.stringify(project);    

    return this._http.put(URL+'/update-project/'+id,param, {headers: headers});
  }
}
