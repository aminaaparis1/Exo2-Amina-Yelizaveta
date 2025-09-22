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
  public navbarClass: string = 'navbar navbar-expand sorbonne-navbar';
  public logoClass: string = 'navbar-logo';
  public titleClass: string = 'navbar-title';
  public containerClass: string = 'navbar-links d-flex gap-4';
  public linkClass: string = 'nav-link nav-link-lg text-white fw-semibold';
  public activeClass: string = 'active-link';
}
