$(document).ready(function() {
  // handle filter button clicks
  $('nav a').on('click', function(event) {
    event.preventDefault();
    $("article").removeClass("hidden");
    var filter = $(this).data('filter');
    if (filter) {
      $("article:not(."+filter+")").addClass("hidden");
    }
  });

  // handle form submits to create new articles
  $('#new-article').on('submit', function(event) {
    event.preventDefault();
    var $form = $(this);
    var $article = $("\
      <article class='content-box'>\
        <h2></h2>\
        <p>\
          <img src=''>\
          <span></span>\
        </p>\
      </article>\
    ");

    $article.addClass($form.find("[name=tags]").val());
    $article.find("h2").text($form.find("[name=title]").val());
    $article.find("img").attr('src', $form.find("[name=image_url]").val());
    $article.find("p span").text($form.find("[name=description]").val());

    $article.appendTo($('section'));
  });
});
