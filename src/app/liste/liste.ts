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
  // Stylisation pilotable (si tu veux changer sans toucher le HTML)
  @Input() listClass: string = 'nav justify-content-center gap-4 pt-3 film-list';
  @Input() itemClass: string = 'nav-link film-link';
  @Input() detailsClass: string = 'text-center mt-4 film-details';
  @Input() posterClass: string = 'img-fluid poster';

  // (optionnel) comme l’exemple du prof avec Output
  @Output() filmSelected = new EventEmitter<string>();

  // La liste est dans le .ts (comme demandé)
  films: Film[] = [
    { titre: 'Batman',         affiche: 'assets/films/batman.jpeg' },
    { titre: 'Narnia',         affiche: 'assets/films/narnia.jpeg' },
    { titre: 'Shutter Island', affiche: 'assets/films/shutter-island.jpeg' },
    { titre: 'Split',          affiche: 'assets/films/split.webp' },
    { titre: 'Until Dawn',     affiche: 'assets/films/until-dawn.jpeg' },
  ];

  // état simple pour le film choisi
  selectedTitre: string | null = null;
  selectedAffiche: string | null = null;

  selectFilm(titre: string, affiche: string, event?: Event) {
    event?.preventDefault(); // évite le saut en haut dû au href="#"
    this.selectedTitre = titre;
    this.selectedAffiche = affiche;
    this.filmSelected.emit(titre); // comme l'Output de ton prof
  }
}
