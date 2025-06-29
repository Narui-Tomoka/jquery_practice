$(function () {
  // .drawer_buttonをクリックすると以下の処理を実行
  $(".drawer_button").on("click", function () {
    // this(.drawer_button)にactiveのclassをボタンを押すたびにつけ外しする
    $(this).toggleClass("active");
    // .drawer_nav_wrapperにopenのclassをボタンを押すたびにつけ外しする
    $(".drawer_nav_wrapper").toggleClass("open");
    // .drawer_bg（黒背景）をアニメーションのように表示・非表示にする
    $(".drawer_bg").fadeToggle();
  });
  // /rawer_bg（黒背景）をクリックしてもメニューが閉じるようにする処理を設定
  $(".drawer_bg").on("click", function () {
    // this(黒背景)をアニメーションのように非表示にする
    $(this).fadeOut();
    // .drawer_buttonからactiveのclassを取り除く
    $(".drawer_button").removeClass("active");
    // .drawer_nav_wrapperからopenのclassを取り除く
    $(".drawer_nav_wrapper").removeClass("open");
  });
});
