import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/characters.interface';

const loadFromLocalStorage = (): Character[] => {

  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  constructor() { }

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    // console.log(`character count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
