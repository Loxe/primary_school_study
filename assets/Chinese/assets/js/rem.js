/**
 * YDUI 可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  【例: 100px = 1rem，32px = .32rem】
 */
(function (window) {
    /* 设计图文档宽度 */

    var doc = window.document
    var docEl = doc.documentElement
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

    var recalc = (function refreshRem () {
        var clientWidth = docEl.getBoundingClientRect().width
        REMSIZE = 20 * (clientWidth / 1920) * 5
        remToPx()
        docEl.style.fontSize = REMSIZE + 'px'
        /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
        return refreshRem
    })()
    /* 添加倍屏标识，安卓为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1)

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
        /* 添加IOS标识 */
        doc.documentElement.classList.add('ios')
        /* IOS8以上给html添加hairline样式，以便特殊处理 */
        if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8) {
            doc.documentElement.classList.add('hairline')
        }
    }

    if (!doc.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
}(window))
var REMSIZE = 20

function remToPx () {
    var widthDom = $('[remw]')
    var heightDom = $('[remH]')
    var fontDom = $('[remF]')
    for (var i = 0; i < widthDom.length; i++) {
        var item = $(widthDom[i])
        var value = item.attr('remw')
        item.css('width', value * REMSIZE + 'px')
    }
    for (var i = 0; i < heightDom.length; i++) {
        var item = $(heightDom[i])
        var value = item.attr('remh')
        item.css('height', value * REMSIZE + 'px')
    }
    for (var i = 0; i < fontDom.length; i++) {
        var item = $(fontDom[i])
        var value = item.attr('remF')
        item.css('fontSize', value * REMSIZE + 'px')
    }
}

function NewPromise (fn) {
    this.fn = fn
    this.fn(this.resolve.bind(this), this.reject.bind(this))
}

NewPromise.prototype.then = function (fn) {
    fn = fn || new (Function)
    this.then = fn
    return this
}
NewPromise.prototype.catch = function (fn) {
    fn = fn || new (Function)
    this.catch = fn
    return this
}
NewPromise.prototype.resolve = function (res) {
    this.then(res)
}
NewPromise.prototype.reject = function (err) {
    this.catch(err)
}
window.Promise = window.Promise || NewPromise
 
