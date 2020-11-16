import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';

import { ActivatedRoute, Params} from '@angular/router';

// Import Project Interface
import { IProject } from '../../models/Project';

// Import data service
import { DataService } from '../../services/datas.service';
import { UploadService } from '../../services/upload.service';
import { URL } from '../../services/globals';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild(FormGroupDirective) form: FormGroupDirective;

  project : IProject;
  // FormGroup que nos permitirá validar el formulario
  formGroup : FormGroup;
  message: String;
  status: string;
  filesToUpload: Array<File>;
  url: String;
  auxImage: string;
  confirm: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private _upload: UploadService
    ) {
    this.message = '';
    this.status = '';
    this.url = URL;
    this.auxImage = '';
    this.confirm = false;
    this.formGroup = new FormGroup({
      nameControl: new FormControl('',Validators.required),
      descriptionControl: new FormControl('', Validators.required),
      categoryControl: new FormControl('',Validators.required),
      yearControl: new FormControl(2020,[Validators.pattern('^[0-9]*$'), Validators.required]),
      langsControl: new FormControl('',Validators.required),
      imageControl: new FormControl('',Validators.required)
    });
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

  onSubmit(){
    this.project.image = this.auxImage;
    this.dataService.updateProject(this.project).subscribe(response=>{
      this._upload.makeFileRequest(URL+'/upload-image/'+response.project._id,[], this.filesToUpload, 'image')
      .then(response =>{
        console.log(response);
      },
      error=>{
        console.log(<any>error)
      }) ;
      console.log('Proyecto actualizado correctamente');
    }, error=>{
      console.log("Error: "+<any>error);
    })
  }
  
  // Obtener el elemento name del formGroup
  get name(): AbstractControl{
    return this.formGroup.get('nameControl');
  }
  get description(): AbstractControl{
    return this.formGroup.get('descriptionControl');
  }
  get category(): AbstractControl{
    return this.formGroup.get('categoryControl');
  }
  get year(): AbstractControl{
    return this.formGroup.get('yearControl');
  }
  // Este método retorna un mensaje de error de acuerdo al error presentado en el campo 'year'
  errorMessageOfYear(): string{
    if (this.year.hasError('required'))   return 'Year is required'
    if (this.year.hasError('pattern'))    return "Please, enter a correct number."
  }
  get langs(): AbstractControl{
    return this.formGroup.get('langsControl');
  }
  get image(): AbstractControl{
    return this.formGroup.get('imageControl');
  }
  onBlur(){
    this.message = '';
  }

  onFileChange(eventFile: any){
    this.filesToUpload = <Array<File>>eventFile.target.files;
  }
}
