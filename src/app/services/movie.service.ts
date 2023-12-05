import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  listMovies?: any = [
    {
      Title: "Tenet",
      Description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      Rating: 7.8,
      Duration: "2h 30 min",
      Genre: [
        {type: "Action"},
        {type: "Sci-Fi"}
      ],
      Relased: "3 September 2020",
      Trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
      img: "Tenet.png"
    },
    {
      Title: "Spider-Man: Into the Spider-Verse",
      Description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      Rating: 8.4,
      Duration: "1h 57min",
      Genre: [
        {type: "Action"},
        {type: "Animation"},
        {type: "Adventure"}
      ],
      Relased: "14 December 2018",
      Trailer: "https://www.youtube.com/watch?v=tg52up16eq0",
      img: "Spider_Man.png"
    },
    {
      Title: "Knives Out",
      Description: "A detective investigates the death of a patriarch of an eccentric, combative family",
      Rating: 7.9,
      Duration: "2h 10min",
      Genre: [
        {type: "Comedy"},
        {type: "Crime"},
        {type: "Drama"}
      ],
      Relased: "27 November 2019",
      Trailer: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
      img: "Knives_Out.png"
    },
    {
      Title: "Guardians of the Galaxy",
      Description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe",
      Rating: 8.0,
      Duration: "2h 1min",
      Genre: [
        {type: "Action"},
        {type: "Adventure"},
        {type: "Comedy"}
      ],
      Relased: "1 August 2014",
      Trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
      img: "Guardians_of_The_Galaxy.png"
    },
    {
      Title: "Avengers: Age of Ultron",
      Description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      Rating: 7.3,
      Duration: "2h 21min",
      Genre: [
        {type: "Action"},
        {type: "Adventure"},
        {type: "Sci-Fi"}
      ],
      Relased: "1 May 2015",
      Trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do",
      img: "Avengers.png"
    }
  ];
  favoriteMovies?: any = [];

  constructor(){}

  getMoviesList(): Observable<any> {
    return this.listMovies;
  }

  addToFavorites(movie: any): Observable<any> {
    this.favoriteMovies.push(movie);
    return this.favoriteMovies;
  }

  clearFavorites() {
    this.favoriteMovies = [];
    return this.favoriteMovies;
  }

}
