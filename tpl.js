(function(def) {
    if (typeof exports === "object") { // CommonJS
        module.exports = def;
    } else if (typeof define === "function" && define.amd) { // RequireJS
        define(def);
    } else { // <script>
        microtpl = def;
    }
})(function (text, pattern) {

  var fnBody = 'var p=[];with(o){';

  text.replace(/[\r\t\n]/g, " ").split(pattern || /<%|%>/).forEach(function(a,i) {
    fnBody += i%2 ? (a[0] == '=' ? 'p.push(' + a.substr(1) + ');' : a) : 'p.push(\'' + a + '\');';
  });
  fnBody += '}return p.join("")';

  return new Function("o", fnBody);

});