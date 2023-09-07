function imgLoad () {
    var imgList = $('[data-img]')
    var a = location.href.split('/')
    var file = a[a.length - 1].split('.')[0]

    for (var i = 0; i < imgList.length; i++) {
        var item = $(imgList[i])
        var value = item.attr('data-img')
        var selfFile = ''
        var pre = ''
        if (item.attr('data-file')) {
            selfFile = item.attr('data-file')
        }
        if (location.href.indexOf('webPage') > 0) {
            pre = '../images/'
        } else {
            pre = 'assets/images/'
        }
        if (selfFile) {
            item.css('background-image', 'url(' + pre + selfFile + '/' + value + ')')
        } else {
            item.css('background-image', 'url(' + pre + file + '/' + value + ')')
        }
    }
}

imgLoad()
