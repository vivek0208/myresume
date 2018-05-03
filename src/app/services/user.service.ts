import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response } from "@angular/http";
import { ModelBindingService } from './binding.model.service';


@Injectable()
export class UserService {


    constructor(private authService: AuthService, private http: Http, private modelBindingService: ModelBindingService) { }

    getUserProfile() {
        const userId = this.authService.getActiveUser().uid;
        const token = this.authService.getActiveUser().getToken();
        return this.http.get('https://myresume-0208.firebaseio.com/' + userId + '/userData.json?auth=' + token)
            .map((response: Response) => {
                return response.json();
            });
    }

    // addUserProfile( userData: any) {
    //     const userId = this.authService.getActiveUser().uid;
    //     const token = this.authService.getActiveUser().getToken();
    //     const postUserData = this.modelBindingService.setUserProfileEncoder(userData);
    //     return this.http.post('https://myresume-0208.firebaseio.com/' + userId + '/userData.json?auth=' + token, postUserData)
    //         .map((response: Response) => {
    //             return response.json();
    //         });
    // }

    updateUserProfile( userData: any) {
        const userId = this.authService.getActiveUser().uid;
        const token = this.authService.getActiveUser().getToken();
        const putUserData = this.modelBindingService.setUserProfileEncoder(userData);
        return this.http.put('https://myresume-0208.firebaseio.com/' + userId + '/userData.json?auth=' + token, putUserData)
            .map((response: Response) => {
                return response.json();
            });
    }

    removeUserProfile() {
        const userId = this.authService.getActiveUser().uid;
        const token = this.authService.getActiveUser().getToken();
        
    }

}
