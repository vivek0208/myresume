import { Injectable } from '@angular/core';
import { IUserModel } from '../Imodels/user.model';


@Injectable()
export class ModelBindingService {

    setUserProfileEncoder(userProfileData: IUserModel): any {
        return {
            firstName: userProfileData.firstName,
            lastName: userProfileData.lastName,
            email: userProfileData.email,
            userdata: userProfileData.userdata ? userProfileData.userdata : [] 
        };
    }

    getUserProfileDecoder(userProfileData): IUserModel {
        return {
            firstName: userProfileData.firstName,
            lastName: userProfileData.lastName,
            email: userProfileData.email,
            userdata: userProfileData.userdata
        };
    }

}