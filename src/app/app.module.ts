import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// httpmodule
import { HttpClientModule } from '@angular/common/http';
// FormModule
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Routes to define the routes of our aplication
// RouterModule is a module for routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import components of Angular Material
import { MaterialModule } from "./angularMaterial/material/material.module";
import { ProjectComponent } from './components/project/project.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    CreateComponent,
    ProjectComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
