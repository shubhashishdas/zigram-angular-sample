import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../services/cocktails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Cocktail Shop';
  categoryList: any;
  ingredientList: any;
  masterDataItems: any;
  items: any;
  tab: number = 1;
  isLoading: boolean;

  constructor(
    private _cocktailsService: CocktailsService
  ) { }

  ngOnInit(): void {
    this.items = [];
    this.masterDataItems = [];
    this.getCategoryList();
    this.getIngredientList();
  }

  getCategoryList() {
    this.isLoading = true;
    this._cocktailsService.getCategoryList().subscribe((response: any) => {
      this.categoryList = response.drinks;
      this.isLoading = false;
    });
  }

  getIngredientList() {
    this.isLoading = true;
    this._cocktailsService.getIngredientList().subscribe((response: any) => {
      this.ingredientList = response.drinks;
      this.isLoading = false;
    });
  }

  changeCategory(event) {
    let catName = event.target.value;
    if (catName) {
      this.getCategoryByName(event.target.value);
    } else {
      this.resetData();
    }
  }

  changeIngredient(event) {
    let ingName = event.target.value;
    if (ingName) {
      this.getIngredientByName(event.target.value);
    } else {
      this.resetData();
    }
  }

  getCategoryByName(categoryName: string) {
    this.isLoading = true;
    this._cocktailsService.filterByCategory(categoryName).subscribe((response: any) => {
      this.masterDataItems = [...response.drinks];
      this.items = [...response.drinks];
      this.items.map(el => {
        el.imgPreview = (el.strDrinkThumb) ? `${el.strDrinkThumb}/preview` : './assets/no-image.png';
        return el;
      });
      this.isLoading = false;
    });
  }

  getIngredientByName(ingredientName: string) {
    this.isLoading = true;
    this._cocktailsService.filterByIngredients(ingredientName).subscribe((response: any) => {
      this.masterDataItems = [...response.drinks];
      this.items = [...response.drinks];
      this.items.map(el => {
        el.imgPreview = (el.strDrinkThumb) ? `${el.strDrinkThumb}/preview` : './assets/no-image.png';
        return el;
      });
      this.isLoading = false;
    });
  }

  searchByKeywords(event) {
    let searchKeyword = event.target.value;
    let items = [...this.masterDataItems];
    this.items = items.filter(el => {
      return (el.strDrink.toLowerCase()).includes(searchKeyword.trim().toLowerCase());
    });
  }

  resetData() {
    this.masterDataItems = [];
    this.items = [];
  }


}
