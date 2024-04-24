import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_MODEL') private readonly postModel: Model<PostDocument>,
  ) {
    this.postModel = postModel;
  }

  async create(createCatDto): Promise<PostDocument> {
    const createdCat = new this.postModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<PostDocument[]> {
    return this.postModel.find().exec();
  }
}
