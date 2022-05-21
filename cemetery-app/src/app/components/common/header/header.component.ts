import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataFromServer();
    this.handleHamburgerMenu();
  }


  private handleHamburgerMenu(): void {
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
