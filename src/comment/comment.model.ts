import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema({ collection: 'comment' })
export class Comment {
	@Field(() => String)
	_id: MongooseSchema.Types.ObjectId;

	@Field(() => String)
	@Prop()
	comment: string;
}

export type CommentDocument = Comment & Document;
export const CommentSchema	= SchemaFactory.createForClass(Comment);