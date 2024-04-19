import { Component, OnInit, signal } from '@angular/core';

@Component( {
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: [ './counter-page.component.css' ]
} )
export class CounterPageComponent implements OnInit {

  public counter = signal<number>( 0 );

  constructor() { }

  ngOnInit() {
  }

  increaseBy( value: number ) {
    this.counter.set( this.counter() + value );
  }

  handleReset() {
    this.counter.set(0);
  }

}
