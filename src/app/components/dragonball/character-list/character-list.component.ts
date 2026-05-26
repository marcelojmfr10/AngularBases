import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/characters.interface'; // es buena práctica poner el type

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
