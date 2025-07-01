//Q1-1 読み込み時に文字の色変化
$(function () {
  //id#q1を対象にcssのcolorプロパティーをgreenに変化させる
  $("#q1").css("color", "green");

  //Q1-2 クリックしてボタンの色変更
  //id#q2を対象にクリック時のイベントを設定
  $("#q2").on("click", function () {
    //cssのbackgroundプロパティーをpinkに変更
    $(this).css("background", "pink");
  });

  //Q1-3 クリックしてフェードアウト
  //id#q3を対象にクリックイベントを設定
  $("#q3").on("click", function () {
    //3000ミリ秒（3秒）かけてフェードアウトさせる
    $(this).fadeOut(3000);
  });

  //Q1-4 クリックしてサイズ変更
  //id#q4を対象にクリックイベントを設定
  $("#q4").on("click", function () {
    //widthとpaddingをチェーンメソッドで連結して入力
    $(this).css("width", "300").css("padding", "50").css("font-size", "20px");
  });

  //Q1-5 クリックしてDOMの挿入
  $("#q5").on("click", function () {
    //セレクタと動作する場所が一緒ならthisで記述するとよい
    // （記述が短くてよいことと、複数の要素がセレクタに入っていると意図しない挙動になるため）
    // prependはターゲットと同じタグ内の直前にDOMが挿入される
    $(this).prepend("DOMの中の前");
    // appendはターゲットと同じタグ内の直後にDOMが挿入される
    $(this).append("DOMの中の後");
    // beforeはターゲットのタグの直前にDOMが挿入される
    $(this).before("DOMの前");
    // afterはターゲットのタグの直後にDOMが挿入される
    $(this).after("DOMの後");
  });

  //Q1-6 クリックして移動
  // id#q6をセレクタに設定
  $("#q6")
    // q6をクリックすると以下の関数を実行
    .on("click", function () {
      // 次に示すプロパティーをアニメーションとして実行
      $(this).animate(
        {
          // シングル（ダブル）クォートで囲ってcssプロパティーを記載
          "margin-top": "100px",
          // またはシングル（ダブル）クォートを省略してキャメルケースでプロパティー名を記載
          marginLeft: "100px",
        },
        // アニメーションの実行にかかる時間をミリ秒単位で記載（3000ミリ秒＝3秒）
        3000
      );
    });

  //Q1-7 クリックしてidのノードをコンソールで表示
  // document(jQueryを読み込んだ対象のHTML全体)から以下の要素を探す
  // .readyはHTMLが読み込まれてから実行するように指示するコード
  // id#q7をクリックすると以下の処理を実行する
  $("#q7").on("click", function () {
    // 取得したq7要素をコンソールに出力
    console.log(this);
  });

  // ※q7　以下のように記述すると文字列のみ出力された
  // （今回の課題とはコンソールに同じように出力されないのですが調べたのでメモとして残してます）
  // $(document).ready(function () {
  // id#q7をクリックすると以下の処理を実行する
  // $("#q7").on("click", function () {
  // 取得した要素を変数q7に格納
  // const q7 = $("#q7");
  // 取得した#q7のノードはjQueryオブジェクトとして格納されており、
  // 配列ではないが配列に似た形として扱われるので、呼び出すときは0番目の値として[0]と書く
  // outerHTMLは要素すべてをタグごと取り出すコード
  // console.log(q7[0].outerHTML);
  // });
  // });

  //Q1-8 ホバー時にサイズ変更
  // hoverメソッドはmouseover,mouseout2つのイベントを「,」で区切ってセットで記載できる
  $("#q8").hover(
    function () {
      // mouseover時にclass"large"を付与する
      $(this).addClass("large");
    },
    function () {
      // mouseout時にclass"large"を取り除く
      $(this).removeClass("large");
    }
  );

  //Q1-9 クリックして配列のアラート表示
  // q9のliをクリックすると以下の処理を実行する
  // 親要素にイベント設定することで後からli要素が追加されても対応できる
  $("#q9").on("click", "li", function () {
    // 変数q9にindex()メソッドで取り出したインデックス番号を格納する
    // $("#q9")と書いてしまうとq9-1～4どれをクリックしても同じ挙動になってしまうため
    // thisと書く必要がある（thisはイベント対象だけに処理を切り分けて実行できる）
    const q9 = $(this).index();
    // 変数q9に格納したインデックス番号をアラートに表示する
    alert(q9);
  });

  //Q1-10 Q10をクリックしてQ11を操作
  // q10のliをクリックすると以下の処理を実行する
  $("#q10").on("click", "li", function () {
    // 変数q10にindex()メソッドで取り出したインデックス番号を格納する
    const q10 = $(this).index();
    // q10に格納したインデックス番号と同じインデックス番号を持つ
    // q11のliの要素にlarge-textクラスを付与する
    $("#q11 li").eq(q10).addClass("large-text");
  });
});

// 補足
// q10のコードに以下の一文を加えると、クリック時にlarge-textクラスがリセットされるため
// 選択した要素一つだけがハイライトされた状態になる
// $("q11 li").removeClass("large-text");
