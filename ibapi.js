
function ib_load_article(id, onload, onerror) {
    var url_prefix = "http://www.ilbe.com/";
    var xhr = new XMLHttpRequest()

    xhr.open("GET", url_prefix + id)
    xhr.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            if (this.status == 200) {
                var _document = (new DOMParser())
                    .parseFromString(this.response, "text/html");

                var article = _document.querySelector(".contentBody > div");

                onload({
                    "html": article.innerHTML,
                    "upvote": _document.lastChild.innerHTML.match(/window.__oDocument.voted_count = ([0-9]+)/)[1],
                    "downvote": _document.lastChild.innerHTML.match(/window.__oDocument.blamed_count = -?([0-9]+)/)[1]
                });
            }
            else {
                onerror(this.status);
            }
        }
    }
    xhr.send();
}

function ib_load_articles(page, onload, onerror) {
    var url_prefix = "http://www.ilbe.com/index.php?mid=ilbe&page=";
    var xhr = new XMLHttpRequest()

    xhr.open("GET", url_prefix + page)
    xhr.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            if (this.status == 200) {
                var _document = (new DOMParser())
                    .parseFromString(this.response, "text/html");

                var articles = [].slice.call(_document.querySelectorAll(
                    "#content > div.content_margin > form > table > tbody > tr"))
                    .filter(function (e) {
                        return !e.classList.contains("notice");
                    });
                
                var results = []

                for (var idx in articles) {
                    console.log(articles[idx]);
                    var article = articles[idx];

                    results.push({
                        "title": article.querySelector(".title a").innerHTML,
                        "link": article.querySelector(".title a").href,
                        "id": article.querySelector(".title a").href.match(/\/([0-9]+)$/)[1],
                        "author": article.querySelector(".author div").innerText
                    });
                }

                onload(results)
            }
            else {
                onerror(this.status);
            }
        }
    }
    xhr.send();
}
