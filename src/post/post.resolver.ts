import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Post } from './post.model';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
	constructor(private postService: PostService) {}

	@Query(() => Post)
	async getPostById(
		@Args('_id', { type:() => String }) _id: MongooseSchema.Types.ObjectId)
		{
			return this.postService.getById(_id); 
		}

}
