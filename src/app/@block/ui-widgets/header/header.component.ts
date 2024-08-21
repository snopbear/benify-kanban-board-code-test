import { Component, ElementRef, ViewChild } from '@angular/core';
import headerComponentImports from './header.component.imports';

@Component({
  selector: 'benify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [headerComponentImports],
})
export class HeaderComponent {
  @ViewChild('hamburgerContainer') hamburgerContainer!: ElementRef;
  @ViewChild('hamburger') hamburger!: ElementRef;

  links: { name: string; url: string }[] = [
    { name: 'Overview', url: '/overview' },
    { name: 'Dashboard - Signals', url: '/dashboard-signals' },
    { name: 'Dashboard - NGRX', url: '/dashboard-ngrx' },
  ];

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    // Toggle 'clicked' class on hamburger container
    if (this.hamburgerContainer) {
      this.hamburgerContainer.nativeElement.classList.toggle('clicked');
    }

    // Add or remove the 'open' class to the nav menu for animation
    const navMenu = this.hamburgerContainer.nativeElement;
    if (this.menuOpen) {
      navMenu.classList.add('open');
    } else {
      navMenu.classList.remove('open');
    }
  }
}
