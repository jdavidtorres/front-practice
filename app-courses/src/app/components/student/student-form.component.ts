import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  title = 'Agregar Estudiante';

  constructor() { }

  ngOnInit(): void {
  }

}
