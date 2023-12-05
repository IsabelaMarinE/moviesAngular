import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { listMovies } from "../pages/home/interfaces/home.interface";
import { Movie } from "../components/models/movie.model";

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  list_Movies = new listMovies();
  favoriteMovies: any = [];

  constructor(){
    this.list_Movies.listMovies = [
      {
        title: "Tenet",
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        rating: 7.8,
        duration: "2h 30 min",
        genre: [
          {type: "Action"},
          {type: "Sci-Fi"}
        ],
        relased: "3 September 2020",
        trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
        img: "Tenet.png",
        isFavorite: false
      },
      {
        title: "Spider-Man: Into the Spider-Verse",
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        rating: 8.4,
        duration: "1h 57min",
        genre: [
          {type: "Action"},
          {type: "Animation"},
          {type: "Adventure"}
        ],
        relased: "14 December 2018",
        trailer: "https://www.youtube.com/watch?v=tg52up16eq0",
        img: "Spider_Man.png",
        isFavorite: false
      },
      {
        title: "Knives Out",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family",
        rating: 7.9,
        duration: "2h 10min",
        genre: [
          {type: "Comedy"},
          {type: "Crime"},
          {type: "Drama"}
        ],
        relased: "27 November 2019",
        trailer: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
        img: "Knives_Out.png",
        isFavorite: false
      },
      {
        title: "Guardians of the Galaxy",
        description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe",
        rating: 8.0,
        duration: "2h 1min",
        genre: [
          {type: "Action"},
          {type: "Adventure"},
          {type: "Comedy"}
        ],
        relased: "1 August 2014",
        trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
        img: "Guardians_of_The_Galaxy.png",
        isFavorite: false
      },
      {
        title: "Avengers: Age of Ultron",
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        rating: 7.3,
        duration: "2h 21min",
        genre: [
          {type: "Action"},
          {type: "Adventure"},
          {type: "Sci-Fi"}
        ],
        relased: "1 May 2015",
        trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do",
        img: "Avengers.png",
        isFavorite: false
      }
    ];
  }

  getMoviesList(): Observable<listMovies> {
    return of(this.list_Movies);
  }

  addToFavorites(movie: any): Observable<any> {
    this.favoriteMovies.push(movie);
    return this.favoriteMovies;
  }

  clearFavorites() {
    this.favoriteMovies = [];
    return this.favoriteMovies;
  }

  filterMovie(text: string): any {

  }

  getMovie(title: string): Observable<Movie | any> {
    return of(this.list_Movies.listMovies.find((item:Movie) => {
      return of(item.title.toLocaleLowerCase() === title.toLocaleLowerCase());
    }))
  }

}
