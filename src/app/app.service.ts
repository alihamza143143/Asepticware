import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  api = 'http://localhost:8000/api';
  username: string;
  

  constructor(private http: HttpClient) {}

  // Returns all members
  getMembers() {
    return this.http
      .get(`${this.api}/members`)
      .pipe(catchError(this.handleError));
  }

  // Returns all members
  setMembers( mId, fname, lname, jTitle, rTeam, status) {

    var body = {
      "id":mId,
      "firstName": fname,
      "lastName": lname,
      "jobTitle": jTitle,
      "team": rTeam,
      "status":status
    }

    var options= {
      headers: {
        'content-type': 'application/json'
      },
      
      params:  { "id":mId,
      "firstName": fname,
      "lastName": lname,
      "jobTitle": jTitle,
      "team": rTeam,
      "status":status
          }
  
  }
    return this.http
      .post(`${this.api}/addMember`,JSON.stringify(body),options)
      .pipe(catchError(this.handleError));
  }

  setUsername(name: string): void {
    this.username = name;
  }

 

  getTeams() {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}
