var btnSubmit_onclick = function(event) {
  // クリックそしたときにdata属性を読み取って、フォームを上書きする
  // まず必要なsubmitとフォームを取ってくる
  var $submit = $(this);
  var $form =  $submit.parents("form");
  // そのフォームに対して、修正をかけていく。
  $form.attr("method", $submit.data("method"));
  $form.attr("action", $submit.data("action"));
  // それができたらsubmitを行う
  $form.submit();
  $submit.off().prop("disabled", true);
  $form.on("submit", false);
};

var document_onready = function(event) {
  $("input[type='submit']").on("click", btnSubmit_onclick);
};

$(document).ready(document_onready);