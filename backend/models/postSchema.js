const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        mainTitle: String,
        mainUrl: String,
        category: String,
        metaData: String,
        posts: [
          {
            title: String,
            content: String,
            url: String,
          },
        ],
      },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('post', postSchema)