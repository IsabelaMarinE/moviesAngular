import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;
  @Output() addNewMovieFavorite = new EventEmitter<any>();

  constructor(){ }

  public addFavorite(item: any){
    this.addNewMovieFavorite.emit(item);
  }
}
