import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Post, PostDocument } from './post.model';


@Injectable()
export class PostService {
	constructor(
		@InjectModel(Post.name) private postModel: Model<PostDocument>,
	) {}

	getById(_id: MongooseSchema.Types.ObjectId) {
		return this.postModel.findById(_id).exec();
	}
}
