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
dHP.innerHTML = HP
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
var topicBox = document.getElementById('topic') // 题目

// 随机排序
var list = data
list.sort(function () {
    return 0.5 - Math.random()
})

// 积分
var integral = 0
// 当前选中词
var checkedWord = []
var flag = true

// 选择答案
function choice (right, img, e) {
    if (flag === true && e.target.getAttribute('data-click') != 'false') {
        flag = false
        // 判断是否正确
        if (right == 'true') {
            checkedWord.push(img)
            var basketStr = ''
            for (var j = 0; j < checkedWord.length; j++) {
                console.log(checkedWord[j])
                basketStr += '<img src=' + checkedWord[j] + ' />'
            }
            basket.innerHTML = basketStr
            // 判断是否全选
            if (checkedWord.length == list[listIndex].cNum) {
                // 抓苹果
                monkey.style = 'left: ' + e.target.offsetLeft - (monkey.offsetWidth / 3) + 'px; top:-10vw'
                setTimeout(function () {
                    monkey.children[0].src = './images/monkey2.png'
                    var img = document.createElement('div')
                    img.className = 'monkey-apple'
                    // img.innerHTML = word
                    monkey.appendChild(img)
                    if (e.target.nodeName == 'IMG') {
                        e.target.parentNode.style.cssText = 'opacity: 0;'
                    } else {
                        e.target.style.cssText = 'opacity: 0;'
                    }
                    e.target.setAttribute('data-click', false)
                    monkey.classList.add('harvest')
                    setTimeout(function () {
                        monkey.children[0].src = './images/monkey.png'
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
                    dGrade.innerText = totalPoints.toFixed(0)
                    checkedWord = []
                    basket.innerHTML = ''
                    if (listIndex < (list.length - 1)) {
                        listIndex += 1
                        answer()
                    } else {
                        // alert('全部完成')
                        clearInterval(countDown)
                        overBox.style.cssText = 'display: block'
                        overTime.innerText = '用时：' +  (allTime - totalTime)
                        overIntegral.innerText = '得分：' + 100
                    }
                }, 2500)
            } else {
                if (e.target.nodeName == 'IMG') {
                    e.target.parentNode.style.cssText = 'opacity: 0;'
                } else {
                    e.target.style.cssText = 'opacity: 0;'
                }
                e.target.setAttribute('data-click', false)
                flag = true
            }
        } else {
            // 错误
            audioError.currentTime = 0
            audioError.play()
            HP -= 1
            dHP.innerText = HP
            if (HP <= 0) {
                panelImg.src = '../assets/images/scoring-error.png'
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

// 渲染题目
function answer () {
    var optionsHtml = ''
    for (var i = 0; i < list[listIndex].option.length; i++) {
        optionsHtml += '<li onclick="choice(' + '&quot;' + list[listIndex].option[i].right + '&quot;' + ', &quot;' + list[listIndex].option[i].img + '&quot;, event)">' +
            '<img src=' + list[listIndex].option[i].img + ' />' +
            '</li>'
    }
    optionBox.innerHTML = optionsHtml

    topicBox.innerHTML = '<img src="' + list[listIndex].title + '" />'
}


// 开始
function start () {
    var readyGo = document.createElement('audio')
    readyGo.src = '../assets/sound/ready go.mp3'
    readyGo.play()

    // document.getElementById('rule').style.cssText = 'display: none'
    setTimeout(function () {
        answer()
    }, 1000)
    // 倒计时
    readyGo.onended = function () {
        totalTime -= 1
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
