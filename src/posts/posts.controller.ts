import {
  Controller,
  Get,
  Post,
  Body,
  Bind,
  Dependencies,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AccessTokenGuard } from 'src/auth/guards/auth.accessToken.guard.ts';

@Controller('posts')
@Dependencies(PostsService)
export class PostsController {
  constructor(private readonly postsService: PostsService) {
    this.postsService = postsService;
  }
  
  @UseGuards(AccessTokenGuard)
  @Post()
  @Bind(Body())
  async create(createCatDto) {
    return this.postsService.create(createCatDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    return this.postsService.findAll();
  }
}
