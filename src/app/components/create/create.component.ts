import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';

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
  @ViewChild(FormGroupDirective) form: FormGroupDirective;

  project : IProject;
  // FormGroup que nos permitirá validar el formulario
  formGroup : FormGroup;
  message: String;
  status: string;
  

  constructor(private _dataService: DataService) {
    this.message = '';
    this.status = '';
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
      nameControl: new FormControl('',Validators.required),
      descriptionControl: new FormControl('', Validators.required),
      categoryControl: new FormControl('',Validators.required),
      yearControl: new FormControl(2020,[Validators.pattern('^[0-9]*$'), Validators.required]),
      langsControl: new FormControl('',Validators.required),
      imageControl: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.project);
    this._dataService.saveProject(this.project).subscribe(
      response => {
        this.message = 'Registro realizado correctamente';
        this.status = 'success';
        this.form.resetForm()
      },
      err => {
        this.message = 'Error: No se pudo guardar el proyeco';
        this.status = 'failed';
      }
    );
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
}
