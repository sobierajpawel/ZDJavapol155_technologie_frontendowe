import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
    // localhost:4200/home
    {path:"home", component:HomeComponent},
    // localhost:4200/sandbox
    {path:"sandbox", component:SandboxComponent},
    //localhost:4200/students
    {path:"students", component:StudentListComponent}
];
