import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  title = 'Agregar Estudiante';
  student: Student = new Student();

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.service.save(this.student).subscribe(student => {
      alert(`Estudiante ${student.name} creado con exito`);
      this.router.navigate(['/students']);
    });
  }
}
