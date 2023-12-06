import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-co',
  templateUrl: './test-co.component.html',
  styleUrl: './test-co.component.scss'
})
export class TestCoComponent implements OnInit {
  @Output() colorEmitter = new EventEmitter<string>();

  color: string = '';
  //countries = [];

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(name: any) {
    return `Привет ${name}`;
  }

  giveLangCode() {
    return ['ru', 'en', 'ua'];
  }

  setColor() {
    this.color = 'Black';
    this.colorEmitter.emit(this.color);
  }
}
