import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get("https://localhost:7021/api/UserApi/GetAllUsers");
  }
  getProfessionals()
  {
    return this.http.get("https://localhost:7057/api/Services/GetAllProfessionals");
  }

}
