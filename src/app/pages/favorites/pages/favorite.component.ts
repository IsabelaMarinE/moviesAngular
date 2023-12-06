import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public listFavorite: any;

  constructor(){}

  ngOnInit(): void {
    if(sessionStorage.getItem('favorites')){
      let data: string | null = sessionStorage.getItem('favorites') || '';
      this.listFavorite = JSON.parse(data);
    }
  }
}
