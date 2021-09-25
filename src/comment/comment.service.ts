import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose, Schema as MongooseSchema, Schema } from 'mongoose';
import { Comment, CommentDocument } from './comment.model';

@Injectable()
export class CommentService {
	
	constructor(
		@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
	) {}
	
	getById(_id) {
		return this.commentModel.findById(_id).exec();
	}
	
	getAll() {
		return [{"_id":"1", "comment":"testing"},{"_id":"2", "comment":"testing"}];
	}

	getHalo(halo: string) {
		return halo;
	}
}

