import { Injectable } from '@angular/core';
import {
    Subscription,
    Observable,
    Subscriber
} from 'rxjs';


@Injectable()
export class SidePanel {

    private slideRequestEventSubscribable: Observable<null>;
    private slideRequestEvent: Subscriber<null>;

    private slideHorizontallyEventSubscribable: Observable<null>;
    private slideHorizontallyEvent: Subscriber<null>;

    constructor() {
        this.slideRequestEventSubscribable = new Observable(
            (subscriber: Subscriber<null>) => {
                this.slideRequestEvent = subscriber;
            }
        );

        this.slideHorizontallyEventSubscribable = new Observable(
            (subscriber: Subscriber<null>) => {
                this.slideHorizontallyEvent = subscriber;
            }
        );
    }

    subscribeInSlideRequestEvent(callback): Subscription {
        return this.slideRequestEventSubscribable.subscribe(callback);
    }

    require2Slide() {
        this.slideRequestEvent.next();
    }

    subscribeInSlideHorizontallyEvent(callback): Subscription {
        return this.slideHorizontallyEventSubscribable.subscribe(callback);
    }

    slideHorizontally() {
        this.slideHorizontallyEvent.next();
    }

}
