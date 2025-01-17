import { PostSchema } from './schemas/post.schema';

export const postsProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection) => connection.model('Post', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
