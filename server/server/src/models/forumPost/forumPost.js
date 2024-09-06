const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        enum: ['General', 'Jobs', 'Events', 'Education', 'Health', 'Other'],
        default: 'General',
    },
    replies: [
        {
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    reports: [
        {
            reportedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            reason: {
                type: String,
                enum: ['Spam', 'Harassment', 'Inappropriate Content', 'Other'],
                required: true,
            },
            reportDate: {
                type: Date,
                default: Date.now,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    }
});


forumPostSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = ForumPost;
