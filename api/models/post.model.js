import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ualberta.ca%2Fhuman-resources-health-safety-environment%2Fculture-and-well-being%2Fphysical-well-being%2Findex.html&psig=AOvVaw2jgd8Fe71PpfKJYnIPYAsT&ust=1711578590654000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjz3KD9koUDFQAAAAAdAAAAABAU',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;