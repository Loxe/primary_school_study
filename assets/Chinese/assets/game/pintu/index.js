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

//
function renderGame(index) {
    var optionsHtml = ''
    var name = data[index].name
    var images = data[index].images
    var sort = [
        [1, 2, 3, 0],
        [1, 2, 0, 3],
        [1, 3, 2, 0],
        [1, 3, 0, 2],
        [1, 0, 2, 3],
        [1, 0, 3, 2],
        [2, 1, 3, 0],
        [2, 1, 0, 3],
        [2, 3, 1, 0],
        [2, 3, 0, 1],
        [2, 0, 1, 3],
        [2, 0, 3, 1],
        [3, 1, 2, 0],
        [3, 1, 0, 2],
        [3, 2, 1, 0],
        [3, 2, 0, 1],
        [3, 0, 1, 2],
        [3, 0, 2, 1],
        [0, 1, 3, 2],
        [0, 2, 1, 3],
        [0, 2, 3, 1],
        [0, 3, 1, 2],
        [0, 3, 2, 1],
    ]
    var random = Math.round(Math.random() * 23)
    $('#tip').html('<img src="' + data[index].tip + '">')
    for (var i = 0; i < images.length; i++) {
        var index = sort[random][i]
        var item = images[index]
        optionsHtml += '<div data-index="' + index + '" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'
            + '<img src="' + item + '" alt=""/></div>'
    }
    optionBox.innerHTML = optionsHtml
    setTimeout(function () {
        audioArr[listIndex].play()
    }, 1000)
}

function orderEnd() {
    var images = document.getElementById('option-box').children
    var rightNumber = 0
    for (var i = 0; i < images.length; i++) {
        var item = images[i]
        var index = $(item).attr('data-index')
        if (index == i) {
            rightNumber++
        }
    }
    if (rightNumber === 4) {
        right()
    }
}

function right() {
    audioCorrect.play()
    listIndex++
    totalPoints += grade
    dGrade.innerText = (totalPoints > 100 ? 100 : totalPoints).toFixed(0)
    if (listIndex >= list.length) {
        gameEnd()
    } else {
        setTimeout(() => {
            renderGame(listIndex)
        }, 1000)
    }
}

function gameEnd() {
    panelImg.src = '../assets/images/scoring-error.png'
    overBox.style.cssText = 'display: block'
    overTime.innerText = '时间：' + totalTime
    overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
    clearInterval(countDown)
}

function allowDrop(ev) {
    ev.preventDefault();
}

var srcdiv = null;

function drag(ev, divdom) {
    srcdiv = divdom;
    ev.dataTransfer.setData("text/html", divdom.innerHTML);
}

function drop(ev, divdom) {
    ev.preventDefault();
    if (srcdiv != divdom) {
        srcdiv.innerHTML = divdom.innerHTML;
        divdom.innerHTML = ev.dataTransfer.getData("text/html");
        var dataIndex = $(srcdiv).attr('data-index')
        $(srcdiv).attr('data-index', $(divdom).attr('data-index'))
        $(divdom).attr('data-index', dataIndex)
        orderEnd()
    }
}

// 开始
function start() {
    var readyGo = document.createElement('audio')
    readyGo.src = '../assets/sound/ready go.mp3'
    readyGo.play()

    //
    renderGame(listIndex)
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
