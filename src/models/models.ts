export interface Image {
  medium: string
}

export interface Show {
  id: number;
  name: string;
  summary: string;
  image: Image;
}

export interface TVMazeResponse {
  show: Show;
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  airstamp: number;
}
