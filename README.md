ibapi
====
Unofficial ILBE api written by javascript.

ib_load_articles
----
Fetches the article list of the specified page.

* __parameters__
  * page : a page number which you wants to load
  * onload : a callback for handling the article list loaded
  * onerror : a callback for handling the error step

* __onload__
  * articles : article's list
    * title
    * link
    * id : the article identifier
    * author : the author who wrote the article
* __onerror__
  * status_code : the status code which `XMLHttpRequest` returns

```js
ib_load_articles(
  1,
  function (articles) {
    for(var idx in articles) {
      var article = articls[idx];
      
      article.title;
      article.link;
      article.id;
      article.author;
    }
  },
  function (status_code) {
    console.log("on error iya...");
  });
```

lb_load_article
----
Fetches a single article of the specified id.

* __parameters__
  * page : a article id which you wants to load
  * onload : a callback for handling the article loaded
  * onerror : a callback for handling the error step
  
* __onload__
  * article : the detailed article
    * html : the content HTML of the article
    * upvote : dq
    * downvote : awg
* __onerror__
  * status_code : the status code which `XMLHttpRequest` returns

```js
ib_load_article(
    12345678,
    function (article) {
      article.html;
      article.upvote;
      article.downvote;
    },
    function (status_code) {
      console.log("on error iya...");
    });
```
