import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

type Film = { titre: string; affiche: string };

@Component({
  selector: 'app-liste',
  standalone: true,
  templateUrl: './liste.html',
  styleUrls: ['./liste.scss'],
  imports: [NgClass],
})
export class Liste {
  @Input() listClass: string = 'nav justify-content-center gap-4 pt-3 film-list';
  @Input() itemClass: string = 'nav-link film-link';
  @Input() detailsClass: string = 'text-center mt-4 film-details';
  @Input() posterClass: string = 'img-fluid poster';

  @Output() filmSelected = new EventEmitter<string>();

  films: Film[] = [
    { titre: 'Batman',         affiche: 'assets/films/batman.jpeg' },
    { titre: 'Narnia',         affiche: 'assets/films/narnia.jpeg' },
    { titre: 'Shutter Island', affiche: 'assets/films/shutter-island.jpeg' },
    { titre: 'Split',          affiche: 'assets/films/split.webp' },
    { titre: 'Until Dawn',     affiche: 'assets/films/until-dawn.jpeg' },
  ];

  selectedTitre: string | null = null;
  selectedAffiche: string | null = null;

  selectFilm(titre: string, affiche: string, event?: Event) {
    event?.preventDefault(); 
    this.selectedTitre = titre;
    this.selectedAffiche = affiche;
    this.filmSelected.emit(titre); 
  }
}
