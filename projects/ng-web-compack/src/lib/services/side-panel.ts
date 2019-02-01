import { Injectable } from '@angular/core';
import {
    Subscription,
    Subject,
    Observable,
    Subscriber
} from 'rxjs';


@Injectable()
export class SidePanel {

    private slideRequestEventSubscribable: Subject<null>;

    private slideHorizontallyEventSubscribable: Observable<null>;
    private slideHorizontallyEvent: Subscriber<null>;

    constructor() {
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
        return this.slideHorizontallyEventSubscribable.subscribe(callback);
    }

    slideHorizontally() {
        // controlar a quantidade de inxcritinhos para que este método abaixo seja chamado uma única vez (if calledCount == 0), quando calledCount == subscribersCount, zerar calledCount.
        this.slideHorizontallyEvent.next();
    }

}
