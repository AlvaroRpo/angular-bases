import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
`
})

export class CounterComponent{
  constructor() { }

  public counter : number = 0;

  increaseBy(value : number) : void{
    this.counter += value;
  }

  reset():void{
    this.counter = 0;
  }
}
