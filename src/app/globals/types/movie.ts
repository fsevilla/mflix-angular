export interface Movie {
  id?:number,
  title:string;
  plot:string;
  poster?:string;
  imdb:IMDB;
  rated:string;
  awards: Awards;
  released?:string;
}

interface IMDB {
  rating: number;
  votes: number;
  id: number;
}

interface Awards {
  wins: number;
  nominations: number;
  text: string;
}