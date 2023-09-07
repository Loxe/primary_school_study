// 生命
var HP = 5
// 总分
var totalPoints = 0
// 每题得分
var grade = 100 / data.length
// 倒计时定时器
var countDown = null

// 计分板
var dHP = document.getElementById('HP')
var dGrade = document.getElementById('grade')
var dCountDown = document.getElementById('count-down')
// 结果计分板
var overBox = document.getElementById('over-box')
var overTime = document.getElementById('over-time')
var overIntegral = document.getElementById('over-integral')
var panelImg = document.getElementById('panel-img')
// 声音
var audioCorrect = document.getElementById('audio-correct')
var audioError = document.getElementById('audio-error')
var topicSound = document.getElementById('topic-sound')

var targetList = document.getElementById('target-list') //  靶子列表
var targetListClick = document.getElementById('target-list-click') // 可点击靶子
var chick = document.getElementById('chick') // 小鸡
var egg = document.getElementById('egg') // 蛋
var pinyinTip = document.getElementById('pinyinTip') // 题目


// 打乱顺序
var list = data
for (var i = 0; i < list.length; i++) {
    list[i].options.sort(function () {
        return 0.5 - Math.random()
    })
}
list.sort(function () {
    return 0.5 - Math.random()
})

// 当前题目
var listIndex = 0

// 点击靶子
var eggFlag = true
var flag = true

function targetClick (e, right) {
    if (flag === true) {
        flag = false
        // 飞蛋
        eggFlag = false
        chick.src = 'images/chick2.png'
        egg.className = 'egg-fly'
        setTimeout(function () {
            egg.src = 'images/egg2.png'
        }, 500)
        setTimeout(function () {
            egg.src = 'images/egg.png'
            egg.className = ''
            eggFlag = true
            if (right === true) {
                audioCorrect.currentTime = 0
                audioCorrect.play()
                totalPoints += grade
                dGrade.innerText = totalPoints.toFixed(0)
                for (var j = 0; j < targetList.childNodes.length; j++) {
                    if (e.target.getAttribute('data-target') == targetList.childNodes[j].getAttribute('data-target')) {
                        e.target.className = 'target-fall'
                        targetList.childNodes[j].className = 'target-fall'
                    }
                }
            } else {
                audioError.currentTime = 0
                audioError.play()
                HP -= 1
                dHP.innerText = HP
                if (HP <= 0) {
                    // alert('游戏结束')
                    panelImg.src = '../assets/images/scoring-error.png'
                    overBox.style.cssText = 'display: block'
                    overTime.innerText = '用时：' +  (allTime - totalTime)
                    overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
                    clearInterval(countDown)
                }
                for (var j = 0; j < targetList.childNodes.length; j++) {
                    targetList.childNodes[j].className = 'target-fall'
                }
            }
            if (HP > 0) {
                setTimeout(function () {
                    if (listIndex < (list.length - 1)) {
                        if (HP == 0) return
                        listIndex += 1
                        answer()
                    } else {
                        clearInterval(countDown)
                        overBox.style.cssText = 'display: block'
                        overTime.innerText = '用时：' +  (allTime - totalTime)
                        HP == 3 ? totalPoints = 100 : totalPoints = totalPoints.toFixed(0)
                        overIntegral.innerText = '得分：' + totalPoints
                    }
                    flag = true
                }, 600)
            }
        }, 1000)
    }
}

// 渲染题目
function answer () {
    if(list[listIndex].topic){
        pinyinTip.src = list[listIndex].topic
        pinyinTip.style.cssText = 'display: block'
    }else{
        pinyinTip.style.cssText = 'display: none'
    }
    var htmlStr = ''
    var htmlStrClick = ''
    for (var i = 0; i < list[listIndex].options.length; i++) {
        htmlStrClick += '<li data-target="' + i + '" onclick="targetClick(event,' + list[listIndex].options[i].right + ')"></li>'
        htmlStr += '<li data-target="' + i + '"><img src="' + list[listIndex].options[i].letter + '" /></li>'
    }
    targetListClick.innerHTML = htmlStrClick
    targetList.innerHTML = htmlStr

    topicSound.src = list[listIndex].sound
    topicSound.currentTime = 0
    topicSound.play()
}

document.addEventListener('mousemove', function (e) {
    chick.style.cssText = 'left:' + (e.pageX - chick.offsetWidth / 2) + 'px;'
    if (eggFlag === true) {
        egg.style.cssText = 'left:' + (e.pageX - egg.offsetWidth / 2) + 'px;'
    }
})

// 开始
function start () {
    var readyGo = document.createElement('audio')
    readyGo.src = '../assets/sound/ready go.mp3'
    readyGo.play()

    // document.getElementById('rule').style.cssText = 'display: none'

    setTimeout(function () {
        answer()
    }, 1500)
    // 倒计时
    readyGo.onended = function () {
        totalTime -= 1
        dCountDown.innerText = totalTime
        countDown = setInterval(function () {
            if (totalTime <= 0) {
                clearInterval(countDown)
                panelImg.src = '../assets/images/scoring-error.png'
                overBox.style.cssText = 'display: block'
                overTime.innerText = '用时：' +  (allTime - totalTime)
                overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
            } else {
                totalTime -= 1
                dCountDown.innerText = totalTime
            }
        }, 1000)
    }
}
start()
