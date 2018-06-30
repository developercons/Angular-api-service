import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

 
  constructor(private httpc:HttpClient) { }

 getProjects(): Observable<any>{
    return this.httpc.get('http://piyalidas.in/webservice/webservice.php?type=all&format=json');
  }

}