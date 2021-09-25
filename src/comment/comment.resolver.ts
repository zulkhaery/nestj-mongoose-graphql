import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';


@Resolver(() => Comment)
export class CommentResolver {
	constructor(private commentService: CommentService ) {}

	@Query(() => Comment)
	async comment(@Args('_id', {type: () => String }) _id: MongooseSchema.Types.ObjectId) {
		return this.commentService.getById(_id);
	}
}
