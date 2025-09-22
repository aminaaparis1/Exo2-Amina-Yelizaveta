import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input() footerClass: string = 'footer sorbonne-footer d-flex justify-content-between align-items-center px-4 py-2';
  @Input() textClass: string = 'footer-text mb-0';
  @Input() buttonClass: string = 'btn btn-contact';
}
