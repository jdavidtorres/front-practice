import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseEndpoint = 'http://localhost:8090/api/students';
  private heders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public toList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseEndpoint);
  }

  public toListPageable(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pageable`, { params: params });
  }

  public detail(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseEndpoint}/${id}`);
  }

  public save(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseEndpoint, student, { headers: this.heders });
  }

  public edit(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseEndpoint}/${student.id}`, student, { headers: this.heders });
  }

  public delete(id: number): Observable<void> {
    return this.http.get<void>(`${this.baseEndpoint}/${id}`);
  }
}
