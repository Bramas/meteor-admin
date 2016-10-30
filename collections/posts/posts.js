  import {Mongo} from 'meteor/mongo';

  import Schema from './schema';

  const Post = new Mongo.Collection('posts');

  SimpleSchema.extendOptions({
    materialForm: Match.Optional(Object)
  });

  const PostSchema = new SimpleSchema(Schema);

  Post.attachSchema(PostSchema);

  export {Post, PostSchema};