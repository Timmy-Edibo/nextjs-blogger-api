import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://timmy:timmy@cluster0.hupmepo.mongodb.net/nextjs-db?retryWrites=true&w=majority&appName=Cluster0',
    ),
    PostsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
