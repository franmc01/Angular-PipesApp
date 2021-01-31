import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initMenuBar()
  }

  initMenuBar(){
    this.items = [
        {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
              {
                label: 'Textos y fechas',
                icon: 'pi pi-align-left',
                routerLink: '/',
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: 'numeros',
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'no-comunes',
              },

          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog'
        },
  ];
  }

}
