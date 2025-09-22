import { Component, EventEmitter} from '@angular/core';
import { NgClass } from '@angular/common';
import { Film } from '../interfaces/film';



@Component({
  selector: 'app-liste',
  standalone: true,
  templateUrl: './liste.html',
  styleUrls: ['./liste.scss'],
  imports: [NgClass],
})
export class Liste {
  public listClass: string = 'nav justify-content-center gap-4 pt-3 film-list';
  public itemClass: string = 'nav-link film-link';
  public detailsClass: string = 'text-center mt-4 film-details';
  public posterClass: string = 'img-fluid poster';


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
  }
}
