import { NgModule } from '@angular/core';

// Routes for define the routes of our aplication
// RouterModule is a module for routing
import { Routes, RouterModule } from '@angular/router';

//Import the components
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectComponent } from './components/project/project.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'create-project', component: CreateComponent},
  { path: 'project-details/:id', component: ProjectComponent},
  { path: 'edit-project/:id', component: EditComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'} //add a wildcard for 404 error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
