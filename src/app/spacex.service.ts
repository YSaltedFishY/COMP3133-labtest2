import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from './models/launch.model';
@Injectable({
  providedIn: 'root'
})


export class SpacexService {
  private url = "https://api.spacexdata.com/v3/launches"

  constructor(private http: HttpClient) { }

  getAllLaucnhes(): Observable<Launch[]>{
    return this.http.get<Launch[]>(this.url)
  }

  getLaunchesByYear(year: string): Observable<Launch[]>{
    return this.http.get<Launch[]>(`${this.url}?launch_year=${year}`)
  }

  getLaunchById(id: number): Observable<Launch[]>{
    return this.http.get<Launch[]>(`${this.url}/${id}`)
  }
}
