import { Injectable } from '@angular/core';
import {
    Subject,
    Subscription
} from 'rxjs';


@Injectable()
export class SidePanel {

    private slideRequestEventSubscription: Subject<null>;
    private slideHorizontallyEventSubscription: Subject<null>;

    constructor() {
        this.slideRequestEventSubscription = new Subject();
        this.slideHorizontallyEventSubscription = new Subject();
    }

    subscribeInSlideRequestEvent(callback): Subscription {
        return this.slideRequestEventSubscription.subscribe(callback);
    }

    require2Slide() {
        this.slideRequestEventSubscription.next();
    }

    subscribeInSlideHorizontallyEvent(callback): Subscription {
        return this.slideHorizontallyEventSubscription.subscribe(callback);
    }

    slideHorizontally() {
        this.slideHorizontallyEventSubscription.next();
    }

}
