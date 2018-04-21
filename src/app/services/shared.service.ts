import { Inject, Injectable } from '@angular/core';
import { STORAGE_KEYS } from './storage-keys-constants';

@Injectable()
export class SharedService {

  constructor() {
  }

  /**
   * @method setDataInStorage()
   * @desc used to set data in local storage using localStorageService.
   * @param key :string .
   * @param value :string .
   */
  setDataInStorage(key, value): any {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);

  }

  /**
   * @method getDataFromStorage()
   * @desc used to get data from local storage using localStorageService.
   * @param key :string .
   */
  getDataFromStorage(key): any {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;

  }

  /**
   * @method isUserAuthenticated()
   * @desc used to check whether user has an authentication or not by using seesion(token).
   * @param key :string .
   */
  isUserAuthenticated(): any {
    const data = this.getDataFromStorage(STORAGE_KEYS.SESSION);
    if (data) {
      return true;
    } else {
      return false;
    }
  }

}
