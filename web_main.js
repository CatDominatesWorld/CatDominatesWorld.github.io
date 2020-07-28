var modal_share = document.getElementById("popup_share");
var modal_background = document.getElementById("popup_background");
var btn_share = document.getElementById("share");
var btn_background = document.getElementById("background");
var span_share = document.getElementsByClassName("close_share")[0];
var span_background = document.getElementsByClassName("close_background")[0];
btn_share.onclick = function () {
  modal_share.style.display = "block";
};
btn_background.onclick = function () {
  modal_background.style.display = "block";
};
span_share.onclick = function () {
  modal_share.style.display = "none";
};
span_background.onclick = function () {
  modal_background.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal_share) {
    modal_share.style.display = "none";
  } else if (event.target == modal_background) {
    modal_background.style.display = "none";
  }
};

setShareLinks();

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params =
    "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
    top +
    ",left=" +
    left;
  window.open(url, "NewWindow", params);
}

function setShareLinks() {
  var pageUrl = encodeURIComponent(document.URL);
  var tweet = encodeURIComponent(
    $("meta[property='og:description']").attr("content")
  );

  $(".social-share.facebook").on("click", function () {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });

  $(".social-share.twitter").on("click", function () {
    url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(url);
  });

  $(".social-share.linkedin").on("click", function () {
    url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
    socialWindow(url);
  });

  $(".donation").on("click", function () {
    url = "https://www.buymeacoffee.com/buycatachur";
    socialWindow(url);
  });
}
