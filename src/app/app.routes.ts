import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent }, // tu home
    { path: 'projects', component: ProjectsComponent },];
