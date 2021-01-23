import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getCategoryList(): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `list.php?c=list`).pipe(catchError(this.handleError));;
  }

  getIngredientList(): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `list.php?i=list`).pipe(catchError(this.handleError));;
  }

  filterByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `filter.php?c=${category}`).pipe(catchError(this.handleError));;
  }

  filterByIngredients(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `filter.php?i=${category}`).pipe(catchError(this.handleError));;
  }
}
