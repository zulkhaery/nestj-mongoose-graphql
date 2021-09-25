import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CommentResolver } from './comment/comment.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.cbn5f.mongodb.net/testing?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,

    }),
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
