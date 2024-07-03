//localStorage.setItem('token', `"${token.replace('"', '')}"`);
(function(value) {
    var items = value.split("=");
    var token = "";
    if (items.length == 1) {
        token = items[0];
    } else if (items.length == 2) {
        token = items[1];
    } else {
        return;
    }
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = "auth_token=" + escape(token) + ";expires=" + exp.toGMTString() + ";path=/ ;Domain=.x.com";
    console.log('cookie=',document.cookie)
    location.reload();
})(token);

//window.location.replace('https://discord.com/channels/@me');
