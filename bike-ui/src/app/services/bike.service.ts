import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes(): any {
    return this.http.get('/server/api/v1/bikes');
  }

  getBike(id: number): any {
    return this.http.get('/server/api/v1/bikes/' + id);

  }

  creatBikeRegistration(bike: any): any {
    const body: string = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);

  }
}
