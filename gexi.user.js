// ==UserScript==
// @name         AgarGexi PUBLIC
// @version      1.3
// @author       TheGexi
// @match        http://agar.io/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==
if (location.host == "agar.io" && location.pathname == "/") {
    location.href = "http://agar.io/thegexi" + location.hash;
    return;
}
function inject(page) {
    var _page = page.replace(/<script.*?>[\s]*?.*?window\.NREUM[\s\S]*?<\/script>/, '<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>');
    _page = _page.replace(/<script.*?src=".*?agario\.core\.js.*?><\/script>/, "<script type='text/javascript' src='http://pastebin.com/raw/5N2Fkv3r/js?v='" + Math.floor((Math.random() * 100000) +1) + "'></script>");
    _page = _page.replace("$(function(){","$(function(){try{");
    _page = _page.replace("window.MC = window.MC || {};",'window.MC = window.MC || {};}catch(e){var MC = new MiniclipAPI("openfl-content","openfl-overlay");MC.loadEnvironment(EnvConfig);lime.embed ("openfl-content", 880, 1024, "transparent", "mc/");window["MC"]=MC;window.MC = window.MC || {};}');
    _page = _page.replace("mc/agario.js?v=","");
    return _page;
}

window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "http://agar.io/",
    onload : function(e) {
        var doc = inject(e.responseText);
        document.open();
        document.write(doc);
        document.close();
    }
});
