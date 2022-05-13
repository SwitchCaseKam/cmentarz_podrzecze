import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
    const menuItems = document.querySelector('ul');

    hamburgerMenuButton.addEventListener('click', () => {
      menuItems.classList.toggle('active');
    });

    menuItems.addEventListener('click', () => {
      menuItems.classList.toggle('active');
    });
  }

}
