import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/shared/models/Icon.model';
import { HandleTurn } from 'src/app/shared/services/HandleTurn.service';
import { Icons } from 'src/app/shared/services/Icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.less'],
  animations: [
    trigger('iconTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('80ms ease-in', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class IconsComponent implements OnInit {

  constructor(private icons: Icons, private handleTurn: HandleTurn) { }

  public get iconLibrary(): Icon[] {
    return this.icons.GetIcons();
  }

  @Input() grid:number = 0;

  ngOnInit(): void {}

  public ShowIcon(index: number) {
    return this.IsCurrentGuess(index)
    || this.handleTurn.IsInMatchedArray(index)
    ? true : false;
  }

  public IsCurrentGuess(index: number) {
    if (index != undefined
      && index != null) {
        if (this.iconLibrary[index] === this.handleTurn.guessOne
        || this.iconLibrary[index] === this.handleTurn.guessTwo) {
          return true;
        } else {
          return false;
        }
    } else {
      return false;
    }
  }

  public IsInMatchedArray(index: number) {
    return this.handleTurn.IsInMatchedArray(index);
  }

  public TakeTurn(index: number) {
    this.handleTurn.TakeTurn(index);
  }
}
