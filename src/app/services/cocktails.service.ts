import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getCategoryList() {
    return this.http.get(`${this.apiUrl}` + `list.php?c=list`);
  }

  getIngredientList() {
    return this.http.get(`${this.apiUrl}` + `list.php?i=list`);
  }

  filterByCategory(category: string) {
    return this.http.get(`${this.apiUrl}` + `filter.php?c=${category}`);
  }

  filterByIngredients(category: string) {
    return this.http.get(`${this.apiUrl}` + `filter.php?i=${category}`);
  }
}
