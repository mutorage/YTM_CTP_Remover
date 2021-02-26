(function(t) {
    var vp = t.prototype;

    vp.proxy = vp.send;
    vp.send = function(o) {
        var rd = JSON.parse(o);

        var ctx = rd.context;

        ctx.clickTracking = undefined;

        this.proxy(JSON.stringify(rd));
    }
})(XMLHttpRequest);
