import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/characters.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();


  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000), //this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    //this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
