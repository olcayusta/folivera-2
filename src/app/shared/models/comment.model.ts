import { User } from './user';

export interface Comment {
  id: number;
  text: string;
  userId: number;
  movieId: number;
  creationTime: Date;
  user: User;
}
