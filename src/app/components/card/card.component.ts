import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;
  @Input() favorite: boolean = false;
  @Output() addNewMovieFavorite = new EventEmitter<any>();
  @Output() selectMovie = new EventEmitter<any>();

  constructor(){ }

  public addFavorite(item: any){
    this.addNewMovieFavorite.emit(item);
  }

  public selectedMovie(title: string){
    this.selectMovie.emit(title);
  }
}
