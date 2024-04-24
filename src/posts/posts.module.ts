import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { postsProviders } from './posts.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
  exports: [PostsService],
  imports: [DatabaseModule],
})
export class PostsModule {}
