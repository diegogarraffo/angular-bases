import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: true
})

export class CounterComponent {

  public counter: number = 10;


  public increaseBy(n: number): void{
    this.counter += n;
  }

  public reset(): void {
    this.counter = 10;
  }

}
