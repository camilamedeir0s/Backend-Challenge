const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
    featured:{
        type: Boolean,
        required: true,
        default: false
    },
    title:{
        type: String
    },
    url:{
        type: String
    },
    imageUrl:{
        type: String
    },
    newsSite:{
        type: String
    },
    summary:{
        type: String
    },
    publishedAt:{
        type: String
    },
    lauches:[
        {
            id:{
                type: String
            },
            provider:{
                type: String
            }
        }
    ],
    events:[
        {
            id:{
                type: String
            },
            provider:{
                type: String
            }
        }
    ]


});

module.exports = mongoose.model('Articles', articlesSchema);