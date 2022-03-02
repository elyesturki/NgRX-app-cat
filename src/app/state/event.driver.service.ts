import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IActionEvent } from './product.state';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  sourceEventSubject: Subject<IActionEvent> = new Subject<IActionEvent>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

  constructor() { }

  publishEvent(event: IActionEvent) {
    console.log("publish action received: ", event);
    this.sourceEventSubject.next(event);
  }
}
