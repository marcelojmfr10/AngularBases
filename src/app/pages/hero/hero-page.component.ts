

import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})

export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;

    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  // getHeroDescription() {
  //   return `${this.name()} - ${this.age()}`;
  // }

  changeHero() {
    this.name.set('spiderman'); // no se usó update, porque no depende del valor anterior
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
