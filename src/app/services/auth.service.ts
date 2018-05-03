import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { STORAGE_KEYS } from './storage-keys-constants';
import { UserService } from './user.service';
import { ModelBindingService } from './binding.model.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private http: Http,
    private modelBindingService: ModelBindingService,
    private sharedService: SharedService) { }

  facebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log(res);
          this.sharedService.setDataInStorage(STORAGE_KEYS.SESSION, res.user.providerData);
          this.router.navigate(['dashboard']);
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  googleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('profile');
      // provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log(res);
          this.sharedService.setDataInStorage(STORAGE_KEYS.SESSION, res.user.providerData);
          this.router.navigate(['dashboard']);
          resolve(res);
        });
    });
  }

  register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          
          const userId = res.uid;
          const token = this.getActiveUser().getIdToken();
          const postUserData = this.modelBindingService.setUserProfileEncoder(value);
          
          return this.http.post('https://myresume-0208.firebaseio.com/' + userId + '/userData.json?auth=' + token, postUserData)
            .map((response: Response) => {
              console.log(response);
              return response.json();
            });
        }, err => reject(err));
        console.log("res");
    });
  }

  signin(value) {
    // console.log('service', value);
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          console.log(res);
          this.sharedService.setDataInStorage(STORAGE_KEYS.SESSION, res.providerData);
          this.router.navigate(['dashboard']);
        }, err => reject(err));
    });
  }

  signOut() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut()
        .then(res => {
          console.log('logout');
          this.sharedService.setDataInStorage(STORAGE_KEYS.SESSION, null);
          this.router.navigate(['login']);
        }, err => reject(err));
    });
  }

  getActiveUser() {
    return firebase.auth().currentUser;
  }
}
