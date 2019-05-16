import { Injectable } from '@angular/core';
import {
    Subject
    // Observable,
    // Subscriber
} from 'rxjs';


@Injectable()
export class SidePanel {

    private subscribersCount: number;

    private execCount: number;

    private subscribers: Map<any, Subject<EventTarget>>;

    private slidingRequisitorSubscribers: Map<any, Subject<null>>;
    // private slideHorizontallyEventSubscribable: Observable<null>;

    constructor() {
        this.subscribers = new Map();
        this.slidingRequisitorSubscribers = new Map();

        // this.slideHorizontallyEventSubscribable = new Observable(
        //     (subscriber: Subscriber<null>) => {
        //         this.slideHorizontallyEvent = subscriber;
        //     }
        // );

        this.subscribersCount = 0;
        this.execCount = 0;
    }

    subscribe(callback: any, identifier?: any) {
        const
            subscriber: Subject<null> = new Subject();

        subscriber.subscribe(callback);

        if (!identifier) {
            identifier = this.subscribers.size;
        }

        this.subscribers.set(identifier, subscriber);
    }

    noticeSlidingWasRequested(targetNode: EventTarget, identifier: any = 0) {
        this.subscribers.get(identifier).next(targetNode);
    }

    // subscribeInSlideHorizontallyEvent(callback): Subscription {
    //     this.subscribersCount += 1;
    //     return this.slideHorizontallyEventSubscribable.subscribe(callback);
    // }

    subscribeOnRequisitors2Sliding(callback: any, identifier?: any) {
        const
            subscriber: Subject<null> = new Subject();

        subscriber.subscribe(callback);

        if (!identifier) {
            identifier = this.slidingRequisitorSubscribers.size;
        }

        this.subscribersCount += 1;
        this.slidingRequisitorSubscribers.set(identifier, subscriber);
    }

    slideHorizontally(identifier: any = 0) {
        if (this.execCount === 0) {
            this.slidingRequisitorSubscribers.get(identifier).next();
        }

        this.execCount += 1;

        if (this.execCount === this.subscribersCount) {
            this.execCount = 0;
        }
    }

    unsubscribe(identifier: any) {
        this.subscribers.delete(identifier);
        this.slidingRequisitorSubscribers.delete(identifier);
        this.subscribersCount -= 1;
    }

}
