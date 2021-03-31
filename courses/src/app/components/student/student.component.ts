import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  titulo: string = 'Listado de Estudiantes';
  students: Student[];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.toList().subscribe(students => {
      this.students = students;
    });
  }
}
