'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LovSchema = new Schema({
    code:{
        type: String,
        required: 'Please fill a Lov code',
    },
    msttype:{
        type: String,
        required: 'Please fill a Lov type',
    },
    name: {
        type: String,
        required: 'Please fill a Lov name',
    },
    parentcode:{
        type: String,
        required: 'Please fill a Lov parent code reference',
    },
    attributes1:String,
    attributes2:String,
    attributes3:String,
    attributes4:String,
    attributes5:String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Lov", LovSchema);