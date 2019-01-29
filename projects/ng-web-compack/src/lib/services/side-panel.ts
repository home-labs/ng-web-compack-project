import { Injectable } from '@angular/core';
import {
    Subject,
    Subscription
} from 'rxjs';


@Injectable()
export class SidePanel {

    private slideHorizontallyEventSubscription: Subject<null>;

    constructor() {
        this.slideHorizontallyEventSubscription = new Subject();
    }

    subscribeInSlideHorizontallyEvent(callback): Subscription {
        return this.slideHorizontallyEventSubscription.subscribe(callback);
    }

    slideHorizontally() {
        this.slideHorizontallyEventSubscription.next();
    }

}
