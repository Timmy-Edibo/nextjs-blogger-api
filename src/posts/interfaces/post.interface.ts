import { Document } from 'mongoose';

export interface Post extends Document {
  readonly title: string;
  readonly description: string;
  readonly dateCreated: string;
}
