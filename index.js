var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var articleSchema = require('./schemas/articleSchema');
var authorSchema = require('./schemas/authorSchema');

var app = express();
app.use('/authors', graphqlHTTP({ schema: authorSchema, pretty: true }));
app.use('/articles', graphqlHTTP({ schema: articleSchema, pretty: true }));
app.listen(3000);