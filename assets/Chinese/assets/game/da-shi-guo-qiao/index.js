// 生命
var HP = 3
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

var soundBox = document.getElementById('sound-box')
var optionBox = document.getElementById('option-box')
var xiaoji = document.getElementById('xiaoji')
// 积分
var list = data
// 当前题目
var listIndex = 0

// 渲染音频和题目
var audioArr = []
for (var i = 0; i < list.length; i++) {
    audioArr.push(document.createElement('audio'))
    audioArr[i].src = list[i].sound
}

function renderGame() {
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        $('.stone' + (i + 1))[0].innerHTML = '<img src="./lesson/' + item.images + '.png">'
        $('.target' + (i + 1) + ' .thing')[0].innerHTML = '<img src="./lesson/' + item.name + '.png">'
    }
    // optionBox.innerHTML = optionsHtml
    // audioArr[listIndex].play()

    var Drag = dnd.Drag
    var Drop = dnd.Drop
    var dnds = {}
    for (var i = 1; i < 7; i++) {
        dnds['drag' + i] = new Drag('.container .item:nth-child(' + i + ')', {
            onDragEnd: function (params) {}
        })
        dnds['drop' + i] = new Drop('.target' + i, {
            onDrop: function (params) {
                if (params.el && params.sourceNode.children[0]) {
                    if ($(params.el).attr('data-index') == $(params.sourceNode).attr('data-index')) {
                        right()
                        params.methods.removeDragedNode('blost')
                        params.el.appendChild(params.sourceNode.children[0])
                    } else {
                        params.methods.removeDragedNode('blost')
                        error()
                    }
                }
            }
        })
    }
}

function right() {
    audioCorrect.play()
    listIndex++
    totalPoints += grade
    dGrade.innerText = (totalPoints > 100 ? 100 : totalPoints).toFixed(0)
    if (listIndex >= list.length) {
        $(xiaoji).addClass('animate')
        setTimeout(() => {
            gameEnd()
        }, 10000)
    }
}

function error() {
    audioError.currentTime = 0
    audioError.play()
    HP -= 1
    dHP.innerText = HP
    if (HP <= 0) {
        gameEnd()
    }
}

function gameEnd() {
    panelImg.src = '../assets/images/scoring-error.png'
    overBox.style.cssText = 'display: block'
    overTime.innerText = '用时：' + (allTime - totalTime)
    overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
    clearInterval(countDown)
}

// 开始
function start() {
    var readyGo = document.createElement('audio')
    readyGo.src = '../assets/sound/ready go.mp3'
    readyGo.play()

    renderGame()
    // 倒计时
    readyGo.onended = function () {
        totalTime -= 1
        dCountDown.innerText = totalTime
        countDown = setInterval(function () {
            if (totalTime <= 0) {
                gameEnd()
            } else {
                totalTime -= 1
                dCountDown.innerText = totalTime
            }
        }, 1000)
    }
}

start()
