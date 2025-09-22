import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() navbarClass: string = 'navbar navbar-expand sorbonne-navbar';
  @Input() logoClass: string = 'navbar-logo';
  @Input() titleClass: string = 'navbar-title';
  @Input() containerClass: string = 'navbar-links d-flex gap-4';
  @Input() linkClass: string = 'nav-link nav-link-lg text-white fw-semibold';
  @Input() activeClass: string = 'active-link';
}
