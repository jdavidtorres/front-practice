import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { ExamComponent } from './components/exam/exam.component';
import { StudentComponent } from './components/student/student.component';
import { StudentFormComponent } from './components/student/student-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses'
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: 'students/new',
    component: StudentFormComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'exams',
    component: ExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
