import { Movie } from "../../../components/models/movie.model"


export interface IlistMovies {
  listMovies: Array<Movie>
}

export class listMovies implements IlistMovies {
  listMovies!: Array<Movie>
}
