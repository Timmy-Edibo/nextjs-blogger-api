import * as mongoose from 'mongoose';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://timmy:timmy@cluster0.hupmepo.mongodb.net/nextjs-db?retryWrites=true&w=majority&appName=Cluster0',
      ),
  },
];
