(function(t) {
    var vp = t.prototype;

    vp.proxy = vp.send;
    vp.send = function(o) {
        try {
            var rd = JSON.parse(o);

            var ctx = rd.context;

            ctx.clickTracking = undefined;

            o = JSON.stringify(rd);
        } catch(e) {}
        this.proxy(o);
    }
})(XMLHttpRequest);
