import { Injectable } from '@angular/core';
import {
    Subscription,
    Subject,
    Observable,
    Subscriber
} from 'rxjs';


@Injectable()
export class SidePanel {

    private subscribersCount: number;
    private execCount: number;

    private slideRequestEventSubscribable: Subject<null>;

    private slideHorizontallyEventSubscribable: Observable<null>;
    private slideHorizontallyEvent: Subscriber<null>;

    constructor() {
        this.subscribersCount = 0;
        this.execCount = 0;

        this.slideRequestEventSubscribable = new Subject();

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
        this.slideRequestEventSubscribable.next();
    }

    subscribeInSlideHorizontallyEvent(callback): Subscription {
        this.subscribersCount += 1;
        return this.slideHorizontallyEventSubscribable.subscribe(callback);
    }

    slideHorizontally() {
        if (this.execCount == 0) {
            this.slideHorizontallyEvent.next();
        }

        this.execCount += 1;

        if (this.execCount == this.subscribersCount) {
            this.execCount = 0;
        }
    }

}
