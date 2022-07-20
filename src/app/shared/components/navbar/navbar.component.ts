import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  iconGithub: IconDefinition = faGithub;
  iconLinkedin: IconDefinition = faLinkedin;
  iconBars: IconDefinition = faBars;
  iconTimes: IconDefinition = faTimes;

  keilerLinkedin: string = environment.keilerLinkedin;
  pokedexGithub: string = environment.pokedexGithub;

  showSidenav: boolean = false;

  constructor(private router: Router) {}

  /**
   * Navegar a la ruta. Luego, cerrar el sidenav.
   * @param route Ruta a la cual dirigir.
   */
  goTo(route: string) {
    this.router.navigate([route]).then(() => {
      this.showSidenav = false;
    });
  }
}
