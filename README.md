ibapi
====
Unofficial ILBE api written in javascript with zero-dependency.
<br>
Remember that this source may not work when the target site's markup structure changed.

Licence
----
This program is distributed under `public domain` license. So you can use, edit or redistribute this source without any permission.

SourceCode Contribution
----
Please feel free to pull request. Any enhancements or bug fixes are always accepted.<br>
I prefer the snake_case coding rule. So this project also follows that. See [this](http://zetawiki.com/wiki/%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC_%ED%91%9C%EA%B8%B0%EB%B2%95) link which discribes the snake_case rule.

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

ib_load_article
----
Fetches a single article of the specified id.

* __parameters__
  * id : a article id which you wants to load
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
