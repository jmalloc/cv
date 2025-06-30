var lightRules = [];
var darkRules = [];

function findThemeRules() {
  var walk = function (rule) {
    if (rule.cssRules) {
      for (var child of rule.cssRules) {
        walk(child);
      }
    }

    if (rule.conditionText) {
      var match = rule.conditionText.match(
        /^\(prefers-color-scheme:\s+(light|dark)\)$/,
      );

      if (match) {
        if (match[1] === "light") {
          lightRules.push(rule);
        } else {
          darkRules.push(rule);
        }
      }
    }
  };

  var link = document.getElementById("theme");
  walk(link.sheet);
}

function applyTheme() {
  var activeTheme = localStorage.getItem("theme");

  var apply = function (ruleTheme, rules) {
    for (var r of rules) {
      for (var m of r.media) {
        r.media.deleteMedium(m);
      }

      if (!activeTheme) {
        r.media.appendMedium("(prefers-color-scheme: " + ruleTheme + ")");
      } else if (activeTheme == ruleTheme) {
        r.media.appendMedium("all");
      } else {
        r.media.appendMedium("not all");
      }
    }
  };

  apply("light", lightRules);
  apply("dark", darkRules);
}

function setTheme(theme) {
  if (!theme) {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", theme);
  }

  applyTheme();
}

window.addEventListener("DOMContentLoaded", function () {
  findThemeRules();
  applyTheme();
});
