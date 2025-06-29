$(function () {
  $(".modal_open_button").on("click", function () {
    $(".modal_win").fadeIn();
  });
  $(".modal_close_button").on("click", function () {
    $(".modal_win").fadeOut();
  });
});

// 補足
// $(".modal_bg").on("click", function () {
//   $(".modal_win").fadeOut();
// });

// と書けばモーダルの黒背景(.modal_bg)をクリックしたときにも
// フェードアウトするように実装できる→UI向上ができる
