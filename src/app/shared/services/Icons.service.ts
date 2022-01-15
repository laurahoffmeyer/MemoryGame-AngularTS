import { Injectable } from '@angular/core';
import { iconLibrary } from 'src/app/shared/utils/icon-library';
import { Icon } from '../models/Icon.model';

@Injectable({
  providedIn: 'root',
})

export class Icons {

  constructor() { }

  public iconLibrary: Icon[] = iconLibrary;
  
  public GetIcons(): Icon[] {
    return this.iconLibrary;
  }

  public Setup(grid:number) {
    if (grid === 4) {
      this.RandomizeIcons(this.iconLibrary);
      this.SpliceIcons(this.iconLibrary);
    }
    this.AssignInstance(this.iconLibrary);
    this.DuplicateIcons(this.iconLibrary);
    this.RandomizeIcons(this.iconLibrary);
  }

  public ResetIcons() {
    this.iconLibrary = iconLibrary;
  }

  private RandomizeIcons(icons:Icon[]) {
    for (let i = icons.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [icons[i], icons[j]] = [icons[j], icons[i]];
    }
    this.iconLibrary = [...icons];
  }

  private SpliceIcons(icons:Icon[]) {
    icons.splice(8);
    this.iconLibrary = [...icons];
  }

  private AssignInstance(icons:Icon[]) {
    icons.forEach(icon => {
      icon.instance = 1;
    })

    this.iconLibrary = icons;
  }

  private DuplicateIcons(icons:Icon[]) {
    const duplicateIcons:Icon[] = icons.map(icon => {
      const duplicate:Icon = Object.assign({}, icon); // shallow copy
      duplicate.instance = 2;
      return duplicate;
    })

    this.iconLibrary = [...icons, ...duplicateIcons];
  }
}