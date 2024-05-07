import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

export const routes: Routes = [
    // localhost:4200/home
    {path:"home", component:HomeComponent},
    // localhost:4200/sandbox
    {path:"sandbox", component:SandboxComponent},
    //localhost:4200/students
    {path:"students", component:StudentListComponent, },
    //localhost:4200/add-student
    {path:"add-student", component:AddStudentComponent},
    //localhost:4200/edit-student/2
    //localhost:4200/edit-student/5
    //localhost:4200/edit-student/10
    {path:"edit-student/:id", component: EditStudentComponent}
];
