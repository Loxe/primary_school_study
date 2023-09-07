function playAudio () {
    var audioList = $('[audio-path]')
    var audio = document.createElement('audio')  //生成一个audio元素
    audio.controls = true  //这样控件才能显示出来
    audio.id = 'btnAudioDom'  //音乐的路径
    document.body.appendChild(audio)  //把它添加到页面中
    for (var i = 0; i < audioList.length; i++) {
        var item = $(audioList[i])
        var value = item.attr('audio-path')
        audio.src = value  //音乐的路径
        item.on('mouseenter', function () {
            //找到所有audio，遍历，currentTime>0
            var canPlay = true
            $('#btnAudioDom').attr('src', $(this).attr('audio-path'))
            var others = $('audio:not([id=btnAudioDom]):not([class=bgAudio])')
            for (var i = 0; i < others.length; i++) {
                if (others[i].currentTime > 0 && others[i].currentTime != others[i].duration) {
                    canPlay = false
                }
            }
            var othersVideo = $('video')
            for (var i = 0; i < othersVideo.length; i++) {
                if (othersVideo[i].currentTime > 0 && othersVideo[i].currentTime != othersVideo[i].duration) {
                    canPlay = false
                }
            }
            if (canPlay) {
                $('#btnAudioDom').trigger('play')
            }
        })
    }
}
