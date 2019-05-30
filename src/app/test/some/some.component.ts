import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent {
  arrayUsers: { name: string, age: number }[] = [
    { name: 'Test 1', age: 26 },
    { name: 'Test 2', age: 23 },
    { name: 'Test 3', age: 30 },
  ]
  @Input() textWeight: string | number = 'normal';
  @Input() textClass: string;

  toggleClass: boolean = false;

  constructor() { }

  onAddUser(name, age) {
    const newUser = { name: name, age: age }
    this.arrayUsers.push(newUser)
  }

  onToggle() {
    this.toggleClass = !this.toggleClass;
  }

}
