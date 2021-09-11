(function()  {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#edeff5",
        "text": "#838391"
      },
      "button": {
        "background": "#4b81e8"
      }
    },
    "theme": "classic",
    "position": "bottom-left",
    "type": "opt-in",
    "content": {
      "message": "当社では、本サイトでの体験を向上させ、コンテンツや広告のパーソナライズ、トラフィック分析のため、Cookieを利用します。",
      "deny": "全て拒否",
      "allow": "全て許可",
      "link": "プライバーポリシー",
      "href": "/public/help/privacy-policy.html"
    },
    "onStatusChange": function(status, chosenBefore) {
      if(this.hasConsented()) {
        console.log("ALLOW"); // Google Analytics などの許可実装
      } else {
        console.log("DENY"); // Google Analytics などの拒否実装
      }
    }
  });
})();

