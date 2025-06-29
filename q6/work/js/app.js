$(function () {
  // .select-boxに変更があった場合に以下の処理を実行
  $(".select-box").on("change", function () {
    // 変数selectedCategoryを作って、.select-boxで選択された要素のvalueを格納する
    let selectedCategory = $(this).val();
    // もし変数selectedCategoryの値がallと同じだったならば
    if (selectedCategory === "all") {
      // .food-listの中のli要素を全て表示する
      $(".food-list li").show();
      // そうではなかった場合は以下の処理を実行
    } else {
      // .food-listの中のli要素それぞれに以下の処理を実行
      $(".food-list li").each(function () {
        // .food-listのデータひとつひとつに設定された
        // category-typeの内容（カスタム属性）を変数foodCategoryに格納する
        let foodCategory = $(this).data("category-type");
        // もしfoodCategoryとselectedCategoryが一致したならば以下の処理を実行する
        if (foodCategory === selectedCategory) {
          // その要素を表示する
          $(this).show();
          // 一致しなければ
        } else {
          // その要素を非表示にする
          $(this).hide();
        }
      });
    }
  });
});
