import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('testVar') testVar

  title = 'ngles3';

  ngOnInit() {
    console.log(this.testVar);

  }
}
