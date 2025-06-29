$(function () {
  // .dropdwnの直下の子要素liにマウスを乗せると以下の処理を実行する
  $(".dropdwn > li").hover(function () {
    // hoverしたli要素(this)のulタグを持つ子要素が
    // 非表示ならslideDownの動きで表示する
    // 表示中ならslideUpの動きで非表示にする。
    // stop()メソッドはアニメーションを起こすメソッドの前に書き、
    // 実行中のアニメーションを終了させることで繰り返しや重複を防ぐことができる
    // stop()を書き忘れるとhoverした回数だけ最初から最後まで動きが繰り返されるので
    // 多くの場合意図した挙動にならない
    $(this).children("ul").stop().slideToggle();
  });
});
