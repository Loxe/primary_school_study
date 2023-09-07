// 生命
var HP = 5
// 总分
var totalPoints = 0
// 每题得分
var grade = 100 / 14
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

// var rule = document.getElementById('rule') // 规则页面
var listBox = document.getElementById('list-box') // 列表盒子

var record = 0
var dom1 = null
var correct = 0
var firstSort = 0 // 排序
// 选择
function pair (type, e, sort) {
  if (e.target.getAttribute('data-url')) {
    if (record === 0) {
      e.target.style.cssText = 'transform: translate(-10%, -10%);'
      dom1 = e
      record = type
      firstSort = sort
    } else {
      // 判断是否重复点击
      if (e.target.getAttribute('data-url') !== dom1.target.getAttribute('data-url')) {
        dom1.target.style.cssText = ''
        if (record === type && firstSort != sort) { // 正确
          audioCorrect.currentTime = 0
          audioCorrect.play()
          correct += 1
          totalPoints += grade
          dGrade.innerText = totalPoints.toFixed(0)
          if (!!window.ActiveXObject || "ActiveXObject" in window) {
            dom1.target.removeNode(true)
            e.target.removeNode(true)
          } else {
            dom1.target.remove()
            e.target.remove()
          }
          // dom1.target.style = 'opacity: 0;'
          // e.target.style = 'opacity: 0;'
          // e.target.remove()
          // dom1.target.remove()
          record = 0
          firstSort = 0
          if (correct === (list.length / 2)) {
            clearInterval(countDown)
            overBox.style.cssText = 'display: block'
            overTime.innerText = '用时：' +  (allTime - totalTime)
            overIntegral.innerText = '得分：' + 100
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
          record = 0
          firstSort = 0
        }
      } else { // 重复
        // 判断是否同元素
        if (e.target === dom1.target) {
          e.target.style.cssText = ''
          dom1 = null
          record = 0
          firstSort = 0
          // console.log('重复')
        } else {
          dom1.target.style.cssText = ''
          record = 0
          firstSort = 0
          // 错误
          HP -= 1
          dHP.innerText = HP
          if (HP <= 0) {
            panelImg.src = '../assets/images/scoring-error.png'
            overBox.style.cssText = 'display: block'
            overTime.innerText = '用时：' +  (allTime - totalTime)
            overIntegral.innerText = '得分：' + totalPoints.toFixed(0)
            clearInterval(countDown)
          }
        }
      }
    }
  }
}

var list = []
for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].num; j++) {
    list.push({
      display: data[i].display1,
      matching: data[i].matching,
      sort: 1
    })
    list.push({
      display: data[i].display2,
      matching: data[i].matching,
      sort: 2
    })
  }
}
list.sort(function() {return 0.5 - Math.random()})
var listStr = ''
for (var i = 0; i < list.length; i++) {
  // listStr += `
  //   <li onclick="pair(${list[i].matching}, event)">${list[i].name}</li>
  // `
  listStr += '<li onclick="pair(' + list[i].matching + ', event, ' + list[i].sort + ')">' +
      '<img data-url="' + list[i].display + '" src="' + list[i].display + '" />' +
      '</li>'
}
listBox.innerHTML = listStr
// 开始
function start () {
  var readyGo = document.createElement('audio')
  readyGo.src = '../assets/sound/ready go.mp3'
  readyGo.play()

  // rule.style.cssText = 'display: none'
  listBox.style.cssText = ''
  // 倒计时
  countDown = setInterval(function() {
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
start()
