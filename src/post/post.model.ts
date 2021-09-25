import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Comment } from 'src/comment/comment.model';

@ObjectType()
@Schema({ collection: 'blog' })
export class Post {
	@Field(() => String)
	_id: MongooseSchema.Types.ObjectId;

	@Field(() => String)
	@Prop()
	title: string;

	@Field(() => String)
	@Prop()
	slug: string;

	@Field(() => String)
	@Prop()
	body: string;

	@Field(() => [String])
	@Prop()
	comments: Comment[]; 
}

export type PostDocument = Post & Document;
export const PostSchema = SchemaFactory.createForClass(Post);
