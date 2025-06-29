$(function () {
  // 送信ボタンがクリックされたときに以下の処理を実行
  $(".btn__submit").on("click", function () {
    // コンソールに文字列「名字」を出力する
    console.log("名字");
    // コンソールに#family__nameの値を出力する
    console.log($("#family__name").val());
    // コンソールに文字列「名前」を出力する
    console.log("名前");
    // コンソールに#given__nameの値を出力する
    console.log($("#given__name").val());
    // コンソールに文字列「生年月日」を出力する
    console.log("生年月日");
    // コンソールにclass「year」「month」「day」それぞれの値に「年」「月」「日」を連結して出力する
    console.log(
      $(".year").val() +
        "年" +
        $(".month").val() +
        "月" +
        $(".day").val() +
        "日"
    );
    // コンソールに文字列「性別」を出力する
    console.log("性別");
    // コンソールにname="gender"checked属性を持つ要素の値を出力する
    console.log($('[name="gender"]:checked').val());
    // コンソールに文字列「職業」を出力する
    console.log("職業");
    // コンソールにclass「occupation」の値を出力する
    console.log($(".occupation").val());
    // コンソールに文字列「アカウント名」を出力する
    console.log("アカウント名");
    // コンソールに#account__nameの値を出力する
    console.log($("#account__name").val());
    // コンソールに文字列「メールアドレス」を出力する
    console.log("メールアドレス");
    // コンソールに#emailの値を出力する
    console.log($("#email").val());
    // コンソールに文字列「パスワード」を出力する
    console.log("パスワード");
    // コンソールに#passwordの値を出力する
    console.log($("#password").val());
    // コンソールに文字列「確認用パスワード」を出力する
    console.log("確認用パスワード");
    // コンソールに#duplication__passwordの値を出力する
    console.log($("#duplication__password").val());
    // コンソールに文字列「住所」を出力する
    console.log("住所");
    // コンソールに#addressの値を出力する
    console.log($("#address").val());
    // コンソールに文字列「電話番号」を出力する
    console.log("電話番号");
    // コンソールに#telの値を出力する
    console.log($("#tel").val());
    // コンソールに文字列「購読情報」を出力する
    console.log("購読情報");
    // コンソールに[name="subscription"]:checked属性を持つ要素それぞれに以下の処理を実行する
    $('[name="subscription"]:checked').each(function () {
      // コンソールにその値を出力する
      console.log($(this).val());
    });
  });
});
