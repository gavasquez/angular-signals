import { Component, OnInit } from '@angular/core';

interface MenuItems {
  title: string,
  routes: string,
}

@Component( {
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
} )
export class MenuComponent implements OnInit {

  public menuItems: MenuItems[] = [
    {
      title: 'Counter',
      routes: 'counter'
    },
    {
      title: 'User',
      routes: 'user-info'
    },
    {
      title: 'Mutacion',
      routes: 'mutacion'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
