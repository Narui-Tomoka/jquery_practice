$(function () {
  // ajax通信が成功するのを待ってから動く関数searchBookを定義している
  function searchBook(bookInfo) {
    // .messageを削除（エラーや検索結果が見つからなかった時のメッセージを削除）
    $(".message").remove();
    // 今回取得した内容に検索したワードが存在し、かつ検索結果が１件以上あれば
    if (bookInfo[0].items && bookInfo[0].items.length > 0) {
      // 検索結果が1件以上あるときの処理
      // 今回は値しか利用しないのでインデックス番号は使わないが、$.eachは引数を2つ必要とするので
      // インデックス番号を取得する引数getIndexを設定している
      // $.eachは配列内のアイテムそれぞれに同じ処理をすることができる
      $.each(bookInfo[0].items, function (getIndex, getVal) {
        // 定数getResultを定義して、表示する情報をそのままHTMLに入れられる状態にして代入する
        const getResult =
          '<li class="lists-item"><div class="list-inner">' +
          "<p>タイトル：" +
          (getVal.title || "タイトル不明") + // 取得内容にタイトル情報があればタイトル、タイトル情報がなければ「タイトル不明」を入れる
          "</p>" +
          "<p>作者：" +
          (getVal["dc:creator"] || "作者不明") + // データがあれば作者情報、なければ「作者不明」を入れる
          "</p>" +
          "<p>出版社：" +
          // 取得した値の中にdc:publisherのキーが存在し、0番目の要素があるなら0番目の要素を入れる。なければ「出版社不明」を入れる。
          ((getVal["dc:publisher"] && getVal["dc:publisher"][0]) ||
            "出版社不明") +
          "</p>" +
          '<a href="' +
          getVal.link["@id"] + // linkキーの@id（書籍情報のurl）を入れる
          '" target="_blank">書籍情報</a>' +
          "</div></li>";
        // .listsの中の一番最初に定数getResult（書籍情報）を追加する
        $(".lists").prepend(getResult);
      });
      // 検索結果が0件のときの処理
    } else {
      // .listsよりも手前に検索結果が見つからなかった時のメッセージを表示する
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>'
      );
    }
  }
  // ページカウント用の変数pageCountを宣言し、初期値として1を代入する
  let pageCount = 1; // pageCount（ページ番号）
  // 検索ボタンを押したときに今回の検索ワードと前回の検索ワードが一致するか確認する用の変数pastSearchを宣言して空文字「""」を代入しておく
  let pastSearch = ""; // 前回の検索ワード

  // .search-btn（検索ボタン）をクリックすると以下の処理を実行する
  $(".search-btn").on("click", function () {
    // 定数searchWordを宣言してsearch-inputに入力された検索ワードを取得する
    const searchWord = $("#search-input").val();
    // 前回検索を押したときの検索ワードと今回の検索ワードが違えば
    if (searchWord !== pastSearch) {
      // ページカウントを1にする（最初のページに戻す）
      pageCount = 1;
      // .listsの子要素を取り除く
      $(".lists").empty();
      // 今回の検索ワード（searchWord）を前回の検索ワード（pastSearch）に代入する
      // （再度検索ボタンを押したときの挙動を条件分岐で変えるため）
      pastSearch = searchWord;
    } else {
      // 同じ検索ワードならpageCountに1を足す（次のページを表示するため）
      pageCount++;
    }

    // ajaxを用いた非同期通信を行う。Promiseのようなものを返す
    $.ajax({
      // エンドポイント
      url:
        "https://ci.nii.ac.jp/books/opensearch/search?title=" +
        searchWord +
        "&format=json&p=" +
        pageCount +
        "&count=20",
      // フォームの送信方法。GET方式はフォームのデータをurlの末尾に追加して送信する。検索エンジン等で使用される
      method: "GET",
    })
      // 通信成功時の動き。doneまたはthenで入力する
      .done(function (res) {
        // 成功したら表示関数searchBookを呼ぶ
        searchBook(res["@graph"]);
      })
      // 通信失敗時の動き。failまたはcatchで入力する
      .fail(function (res) {
        // 検索結果を表示している.listsの中身（子要素）のliを空にする
        $(".lists").empty();
        // 通信・検索結果を表示する.messageの要素を取り除く
        $(".message").remove();
        // statusはステータスコード(http)を表す
        // httpステータスコード0の時のメッセージを.listsの要素の前に表示（0は通信エラーやクライアントサイドの問題など）
        if (res.status === 0) {
          $(".lists").before(
            '<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>'
          );
          // httpステータスコードが0ではなく400なら以下のメッセージを.listsの要素の前に表示（400は一般的なクライアントエラー）
        } else if (res.status === 400) {
          $(".lists").before(
            '<div class="message">検索キーワードが無効です。<br>1文字以上で検索してください。</div>'
          );
          // httpステータスコードが0でも400でもなければ.listsの要素の前に以下のメッセージを表示（その他のエラー）
        } else {
          $(".lists").before(
            '<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>'
          );
        }
      });
  });
  // リセットボタンを押すと以下の処理を実行する
  $(".reset-btn").on("click", function () {
    // pageCountに1を代入する（次回検索時に1ページ目から表示するため）
    pageCount = 1;
    // 検索ワードに空文字を入れて前回の検索結果をリセットする
    pastSearch = "";
    // .listsの子要素（検索結果）を空にする
    $(".lists").empty();
    // メッセージを消す
    $(".message").remove();
    // 入力欄に空文字を代入することで空にする
    $("#search-input").val("");
  });
});

// 補足
// JavaScriptではasync await try/catch (finally)を使った非同期処理の書き方もある
// 条件分岐や「for文」や「for...of文」を使ったループ処理も簡単に書ける
// tryの中にエラーになる可能性がある処理を書き込んでおくことで処理が止まってしまうことを防げる。
// finallyはtryとセットで使う。処理が成功しても失敗しても行う後処理を記述する

// jQuery専用の非同期処理の書き方
// $ajax() .done() .fail() .always()
