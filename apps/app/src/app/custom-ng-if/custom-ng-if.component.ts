import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-ng-if',
  templateUrl: './custom-ng-if.component.html',
  styleUrls: ['./custom-ng-if.component.scss']
})
export class CustomNgIfComponent implements OnInit {

  appCustomNgIf = false;
  constructor() { }

  ngOnInit(): void {
  }

}
