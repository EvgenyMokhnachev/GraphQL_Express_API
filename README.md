"# GraphQL_Express_API" 
Get all articles:
http://localhost:3000/articles?query={allArticles{id,createdAt,authorId,title,text}}
http://mokhnachev.info:3000/articles?query={allArticles{id,createdAt,authorId,title,text}}

Get author's articles:
http://localhost:3000/articles?query={articlesByAuthorId(authorId:1){id,createdAt,authorId,title,text}}
http://mokhnachev.info:3000/articles?query={articlesByAuthorId(authorId:1){id,createdAt,authorId,title,text}}

Get article by id:
http://localhost:3000/articles?query={articleById(id:1){id,createdAt,authorId,title,text}}
http://mokhnachev.info:3000/articles?query={articleById(id:1){id,createdAt,authorId,title,text}}

Get author by id:
http://localhost:3000/authors?query={authorById(id:2){id,createdAt,username}}
http://mokhnachev.info:3000/authors?query={authorById(id:2){id,createdAt,username}}

Get all authors:
http://localhost:3000/authors?query={allAuthors{id,createdAt,username}}
http://mokhnachev.info:3000/authors?query={allAuthors{id,createdAt,username}}