import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dino } from './dino';

@Injectable(
  {
    providedIn: 'root'
   }
)
export class DinoService {

  private apiUrl: string = environment.baseUrl + 'dinos';
  constructor(private http: HttpClient) { }

  getDinos(): Observable<Dino[]> {
    return this.http.get<Dino[]>(this.apiUrl);
  }

}
