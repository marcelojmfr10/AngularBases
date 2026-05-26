import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  // imports: [NgClass]
})
export class DragonballSuperPageComponent {
  // inyección tradicional
  // constructor(
  //   public dragonballService: DragonballService
  // ) {

  // }

  // nueva forma de inyección
  public dragonballService = inject(DragonballService);
}
