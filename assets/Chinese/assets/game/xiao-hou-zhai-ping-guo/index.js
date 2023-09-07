// 生命
var HP = 5
// 总分
var totalPoints = 0
// 每题得分
var grade = parseInt((100 / data.length).toFixed(0))
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
var monkey = document.getElementById('monkey') // 猴子
var basket = document.getElementById('basket') // 篮子

// 随机排序
var list = data
list.sort(function () {
    return 0.5 - Math.random()
})

// 积分
var integral = 0
// 当前选中字母
var checkedWord = []
var flag = true

// 选择答案
function choice(word, e) {
    if (flag === true && e.target.getAttribute('data-click') != 'false') {
        flag = false
        // 判断是否正确
        if (list[listIndex].word===word) {
            monkey.style = 'left: ' + e.target.offsetLeft - (monkey.offsetWidth / 3) + 'px; top:0'
            setTimeout(function () {
                monkey.children[0].src = imgPath.monkey2
                var img = document.createElement('div')
                img.className = 'monkey-apple'
                // img.innerHTML = word
                monkey.appendChild(img)
                e.target.parentNode.style.cssText = 'opacity: 0;'
                e.target.parentNode.setAttribute('data-click', false)
                monkey.classList.add('harvest')
                setTimeout(function () {
                    monkey.children[0].src = imgPath.monkey
                    monkey.removeChild(img)
                    monkey.className = ''
                    monkey.style.cssText = ''
                    flag = true
                }, 1000)
            }, 500)
            setTimeout(function () {
                // 正确
                audioCorrect.currentTime = 0
                audioCorrect.play()
                totalPoints += grade
                dGrade.innerText = totalPoints
                checkedWord = []
                basket.innerHTML = ''
                if (listIndex < (list.length - 1)) {
                    listIndex += 1
                    setTimeout(function () {
                        answer()
                    }, 1200)
                } else {
                    // alert('全部完成')
                    clearInterval(countDown)
                    overBox.style.cssText = 'display: block'
                    overTime.innerText = '用时：' +  (allTime - totalTime)
                    overIntegral.innerText = '得分：' + 100
                }
            }, 2500)
        } else {
            // 错误
            audioError.currentTime = 0
            audioError.play()
            console.log(1)
            HP -= 1
            dHP.innerText = HP
            if (HP <= 0) {
                panelImg.src = imgPath.scoringError
                overBox.style.cssText = 'display: block'
                overTime.innerText = '用时：' +  (allTime - totalTime)
                overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
                clearInterval(countDown)
            }
            flag = true
            // e.target.style = 'background: red'
        }
    }
}

// 当前题目
var listIndex = 0

// 渲染音频和题目
var audioArr = []
for (var i = 0; i < list.length; i++) {
    audioArr.push(document.createElement('audio'))
    audioArr[i].src = list[i].sound
}

function answer() {
    var optionsHtml = ''
    for (var i = 0; i < list[listIndex].allLetter.split('|').length; i++) {
        var word=list[listIndex].allLetter.split('|')[i]
        optionsHtml += '<li onclick="choice(' + '&quot;' + word + '&quot;' + ', event)"><img src="./word/' + word + '.png" alt=""></li>'
    }
    optionBox.innerHTML = optionsHtml
    audioArr[listIndex].play()
    basket.innerHTML = '<img src="./word/'+list[listIndex].already+'">'
}


// 开始
function start() {
    var readyGo = document.createElement('audio')
    readyGo.src = '../assets/sound/ready go.mp3'
    readyGo.play()

    // rule.style.cssText = 'display: none'
    setTimeout(function () {
        answer()
    }, 1500)
    // 倒计时
    countDown = setInterval(function () {
        if (totalTime <= 0) {
            clearInterval(countDown)
            panelImg.src = imgPath.scoringError
            overBox.style.cssText = 'display: block'
            overTime.innerText = '用时：' +  (allTime - totalTime)
            overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
        } else {
            totalTime -= 1
            dCountDown.innerText = totalTime
        }
    }, 1000)
}

start()
