import mongoose from 'mongoose'

/* ImageSchema will correspond to a collection in your MongoDB database. */
const ImageSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  caption: {
    /* The caption of this Post */

    type: String,
    required: [true, 'Please provide a caption for this post.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  image_url: {
    /* Url to pet image */

    required: [true, 'Please provide an image url for this pet.'],
    type: String,
  },
})

export default mongoose.models.Image || mongoose.model('Image', ImageSchema)