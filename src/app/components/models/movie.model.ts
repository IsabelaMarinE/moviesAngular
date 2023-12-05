export class Movie {
  title!: string;
  description!: string;
  rating!: number;
  duration!: string;
  genre!: Array<genres>;
  relased!: string;
  trailer!: string;
  img!: string;
  isFavorite!: boolean;
}

export class genres {
  type!: string;
}
