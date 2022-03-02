import { Component, OnInit } from '@angular/core';
import { EventDriverService } from '../../state/event.driver.service';
import { IActionEvent } from '../../state/product.state';

@Component({
  selector: 'app-counter-states',
  templateUrl: './counter-states.component.html',
  styleUrls: ['./counter-states.component.scss']
})
export class CounterStatesComponent implements OnInit {
  counter: number = 0;
  constructor( private eventDriverService: EventDriverService ) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable
      .subscribe((actionEvent: IActionEvent)=> {
        this.counter++;
      })
  }

}
