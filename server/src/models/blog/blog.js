// IMPORTING REQUIRED PACKAGES
const mongoose = require("mongoose");
// INITIALIZING MONGOOSE SCHEMA
const Schema = mongoose.Schema;

// BLOG SCHEMA
const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: { typeof: Schema.Types.ObjectId, ref: "User" },
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    like: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
);

// EXPORTING BLOG MODEL
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
