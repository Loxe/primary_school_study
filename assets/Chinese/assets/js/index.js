function getUrlParam (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg)  //匹配目标参数
    if (r != null) return decodeURIComponent(r[2])
    return null //返回参数值
}

function changeURLParam (name, value) {
    var url = document.URL, resultUrl = ''
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    var replaceText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (r != null) {
        var tmp = url.replace(encodeURIComponent(name) + '=' + r[2], replaceText)
        resultUrl = (tmp)
    } else {
        if (url.match('[\?]')) {
            resultUrl = url + '&' + replaceText
        } else {
            resultUrl = url + '?' + replaceText
        }
    }
    history.replaceState(null, null, resultUrl)
}

if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {

        var T, A, k

        if (this == null) {
            throw new TypeError(' this is null or not defined')
        }

        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
        var O = Object(this)

        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function')
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (thisArg) {
            T = thisArg
        }

        // 6. Let A be a new array created as if by the expression new Array(len) where Array is
        // the standard built-in constructor with that name and len is the value of len.
        A = new Array(len)

        // 7. Let k be 0
        k = 0

        // 8. Repeat, while k < len
        while (k < len) {

            var kValue, mappedValue

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                kValue = O[k]

                // ii. Let mappedValue be the result of calling the Call internal method of callback
                // with T as the this value and argument list containing kValue, k, and O.
                mappedValue = callback.call(T, kValue, k, O)

                // iii. Call the DefineOwnProperty internal method of A with arguments
                // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
                // and false.

                // In browsers that support Object.defineProperty, use the following:
                // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

                // For best browser support, use the following:
                A[k] = mappedValue
            }
            // d. Increase k by 1.
            k++
        }

        // 9. return A
        return A
    }
}

function doKey (e) {
    var ev = e || window.event//获取event对象  
    var obj = ev.target || ev.srcElement//获取事件源  
    var t = obj.type || obj.getAttribute('type')//获取事件源类型  
    if (ev.keyCode == 8 && t != 'password' && t != 'text' && t != 'textarea') {
        return false
    }
}

//禁止后退键 作用于Firefox、Opera  
document.onkeypress = doKey
//禁止后退键  作用于IE、Chrome  
document.onkeydown = doKey

function Base64 () {

    // private property
    _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    // public method for encoding
    this.encode = function (input) {
        var output = ''
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4
        var i = 0
        input = _utf8_encode(input)
        while (i < input.length) {
            chr1 = input.charCodeAt(i++)
            chr2 = input.charCodeAt(i++)
            chr3 = input.charCodeAt(i++)
            enc1 = chr1 >> 2
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
            enc4 = chr3 & 63
            if (isNaN(chr2)) {
                enc3 = enc4 = 64
            } else if (isNaN(chr3)) {
                enc4 = 64
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4)
        }
        return output
    }

    // public method for decoding
    this.decode = function (input) {
        var output = ''
        var chr1, chr2, chr3
        var enc1, enc2, enc3, enc4
        var i = 0
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++))
            enc2 = _keyStr.indexOf(input.charAt(i++))
            enc3 = _keyStr.indexOf(input.charAt(i++))
            enc4 = _keyStr.indexOf(input.charAt(i++))
            chr1 = (enc1 << 2) | (enc2 >> 4)
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
            chr3 = ((enc3 & 3) << 6) | enc4
            output = output + String.fromCharCode(chr1)
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2)
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3)
            }
        }
        output = _utf8_decode(output)
        return output
    }

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, '\n')
        var utftext = ''
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n)
            if (c < 128) {
                utftext += String.fromCharCode(c)
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192)
                utftext += String.fromCharCode((c & 63) | 128)
            } else {
                utftext += String.fromCharCode((c >> 12) | 224)
                utftext += String.fromCharCode(((c >> 6) & 63) | 128)
                utftext += String.fromCharCode((c & 63) | 128)
            }

        }
        return utftext
    }

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = ''
        var i = 0
        var c = c1 = c2 = 0
        while (i < utftext.length) {
            c = utftext.charCodeAt(i)
            if (c < 128) {
                string += String.fromCharCode(c)
                i++
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1)
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
                i += 2
            } else {
                c2 = utftext.charCodeAt(i + 1)
                c3 = utftext.charCodeAt(i + 2)
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
                i += 3
            }
        }
        return string
    }
}

function saveChildPath () {
    var newHref = location.href.split('/')
    var newArray = []
    for (var i = 0; i < 3; i++) {
        newArray[i] = newHref[newHref.length - 3 + i]
    }
    var path = './' + newArray.join('/')
    var base = new Base64()
    var urlPath = location.href
    var sp = urlPath.split('/').pop()
    var name = sp.split('.html')[0]
    var borwser = new Browser().browser
    if (borwser == '360EE' || borwser == 'Chrome' || borwser == 'Safari') {// 用localcun ky d
        if (localStorage) {
            localStorage.setItem('path', path)
        } else {
            if (name != 'index') {
                top.postMessage(base.encode(path), '*')
            }
        }
    } else {
        if (name != 'index') {
            top.postMessage(base.encode(path), '*')
        }
    }

}


setTimeout(function(){
    $('video').attr({disablePictureInPicture:'disablePictureInPicture'});
},100)