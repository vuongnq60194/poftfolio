(function () {
    function s(n, i, s, o) {
        n[t](e + i, r == "wheel" ? s : function (e) {
            !e && (e = window.event);
            var t = {
                originalEvent: e,
                target: e.target || e.srcElement,
                type: "wheel",
                deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                delatZ: 0,
                preventDefault: function () {
                    e.preventDefault ? e.preventDefault() : e.returnValue = false
                }
            };
            if (r == "mousewheel") {
                t.deltaY = -1 / 40 * e.wheelDelta;
                e.wheelDeltaX && (t.deltaX = -1 / 40 * e.wheelDeltaX)
            } else {
                t.deltaY = e.detail
            }
            return s(t)
        }, o || false)
    }
    var e = "",
        t, n, r;
    if (window.addEventListener) {
        t = "addEventListener"
    } else {
        t = "attachEvent";
        e = "on"
    }
    if (document.onmousewheel !== undefined) {
        r = "mousewheel"
    }
    try {
        WheelEvent("wheel");
        r = "wheel"
    } catch (i) {}
    if (!r) {
        r = "DOMMouseScroll"
    }
    window.addWheelListener = function (e, t, n) {
        s(e, r, t, n);
        if (r == "DOMMouseScroll") {
            s(e, "MozMousePixelScroll", t, n)
        }
    };
    $.fn.mousewheel = function (e) {
        return this.each(function () {
            window.addWheelListener(this, e, true)
        })
    }
})(jQuery)

$(function () {
    var position = 0;
    $('body').mousewheel(function (evt) {
        //        debugger
        console.log(evt.deltaY);

        //        var currentElement = $(".item").next();
        //      $('html, body').animate({scrollLeft: $(currentElement).offset().left}, 800);
        //      return false;
        if (position == 0 && evt.deltaY < 0) {
            return;
        }
        if (position == ($(".list-items").width() * $(".item").length) && evt.deltaY > 0) {
            return;
        }

        evt.deltaY > 0 ? position += $(".item").width() : position -= $(".item").width()

        $(".list-items").animate({
            scrollLeft: position
        }, 1000);

        return;
    });
});