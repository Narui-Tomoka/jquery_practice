$(function () {
  // .navの中のli要素（タブボタン）をクリックすると以下の処理を実行する
  $(".nav li").on("click", function () {
    // 変数indexを定義して、クリックしたli要素のindex番号を取得して格納する
    let index = $(this).index();
    // .descriptionの中のli要素（タブコンテンツ）全てにis-hiddenを付与して非表示にする
    $(".description li").addClass("is-hidden");
    // 変数indexに格納した番号と一致した.descriptionの中のli要素をeq()メソッドで指定して
    // is-hiddenクラスを取り除くことでクリックしたタブボタンに対応するコンテンツを表示できる
    $(".description li").eq(index).removeClass("is-hidden");
  });
});
