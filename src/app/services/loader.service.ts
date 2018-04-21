import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {

    status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    /**
     * @method display()
     * @desc Just pass ‘true’ in order to display the loader and ‘false’ in order to hide the loader
     * @param value :boolean - true/false
     */
    display(value: boolean): void {
        this.status.next(value);
        if (value) {
            setTimeout(() => {
                this.status.next(false);
            }, 1000);
        }
    }

}
