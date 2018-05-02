import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response } from "@angular/http";

@Injectable()
export class UserService {

  constructor(private authService: AuthService, private http: Http) { }

  getUserProfile(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.get('https://ionic-recipebook-95979.firebaseio.com/' + userId  + '/shopping-list.json?auth='+token)
    .map((response: Response) => {
        return response.json();
    })
    .do((ingredient:Ingredient[])=>{
        if(ingredient){
            this.ingredients = ingredient;
        }else{
            this.ingredients = [];
        }
    });
  }

  addUserProfile(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put('https://myresume-0208.firebaseio.com/' + userId + '/shopping-list.json?auth='+token,
        this.ingredients)
        .map((response: Response) => {
        return response.json();
    });
  }

  updateUserProfile() {

  }

  removeUserProfile() {

  }

}
