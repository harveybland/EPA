import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen : boolean = false ; 

  constructor() { }

  ngOnInit() {
  }


  open() {
    this.navOpen = !this.navOpen;
  }
}
