/*
* id 需要动画循环的img标签的id
* file文件路径去除最后一个要变化的数字 比如
* type 后缀 比如 .png
* from 开始的序号
* to 结束的序号
* time 动画执行的总时间 ms
*
*  loopImg ('id', '/XX/XX/XX/', '.png', 1, 100, 1000)
* */
function loopImg (id, file, type, from, to, time) {
    var dom = document.getElementById(id)
    var inf = time / (to - from)
    var index = from
    setInterval(function () {
        if (index < to) {
            index++
        } else {
            index = from
        }
        dom.src = file + '/' + index + '.png'
    }, inf)
}
