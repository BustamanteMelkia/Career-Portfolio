import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }
  
  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
    return new Promise(function(resolved, rejected){
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      for(let i=0; i< files.length; i++){
        formData.append(name, files[i],files[i].name)
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolved(JSON.parse(xhr.response));
          }else{
            rejected(xhr.response);
          }
        }
      }

      xhr.open('POST',url, true);
      xhr.send(formData);
    })
  }
}
