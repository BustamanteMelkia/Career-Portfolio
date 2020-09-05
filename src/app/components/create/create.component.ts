import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// Import Project Interface
import { IProject } from '../../models/Project';
// Import data service
import { DataService } from '../../services/datas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  project : IProject;
  // FormGroup que nos permitirá validar el formulario
  formGroup : FormGroup;

  constructor(private _dataService: DataService) {
    this.project = {
      _id: '',
      name: '',
      description: '',
      category: '',
      year: 2020,
      langs: '',
      image: ''
    };  
    this.formGroup = new FormGroup({
      nameControl: new FormControl("",Validators.required),
      descriptionControl: new FormControl("", Validators.required),
      categoryControl: new FormControl("",Validators.required),
      yearControl: new FormControl(2020,[Validators.pattern("^[0-9]*$"), Validators.required]),
      langsControl: new FormControl("",Validators.required),
      imageControl: new FormControl("",Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.project);
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
  get langs(): AbstractControl{
    return this.formGroup.get('langsControl');
  }
  get image(): AbstractControl{
    return this.formGroup.get('imageControl');
  }

}
