export interface Movie {
  readonly id: number;
  readonly originalTitle: string;
  readonly title: string;
  readonly description: string;
  posterUrl: string;
  year: string;
  directorId: number;
  trailerUrl: string;
  nowPlayingCount: number;
}
