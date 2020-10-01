var list001 = new Array(4);

var list002 = [1,'a','b',321,false,"卧槽",432,54654,3213];

for(var i = 0; i < list002.length;i++)
{
    console.log(list002[i])
}

var poped = list002.pop();

// 数组的pop操作（删除最后一个元素）
console.log(poped);

//数组的删除操作 array.splice(n,m) 删除第n个开始数m个 然后返回
var deleted = list002.splice(2,2);
console.log(deleted);

//两个数组的联和 array1.concat(array2) 返回联合好的新数组 原数组和被联和的数组不变
var concated = list002.concat(deleted)
console.log(concated);

//查找数组中第一个符合的元素 返回其索引 没有的话 返回-1
var indof = list002.indexOf("fucked")
console.log(indof);

// every函数 参数是一个匿名函数 依次传入数组中每一个元素 执行匿名函数后有一个为false 则every返回false 否则返回true
var everyfunc = list002.every(function(a){
    return a != undefined;
})
console.log("everyfunc:" + everyfunc)

// some函数 参数是一个匿名函数 依次传入数组中每一个元素 执行匿名函数后返回一个true 则为true 否则为false
var somefunc = list002.some(function(a){
    return a > 54653;
})
console.log("somefunc:" + somefunc)

// foreach函数 依次传入数组中的每一个元素 然后依次执行
list002.forEach(function(a){
    console.log(a + '  forEach');
})

//filter函数 用于过滤 参数是一个匿名函数 依次传入数组中每一个元素 执行匿名函数后返回true的会加入一个数组并作为返回值返回 false的不会
var filtered = list002.filter(function(element){
    return element > 1000;
})

console.log(filtered)



// 栈类
function Stack() {
    // 栈中的属性
    var items = []

    // 栈相关的方法
    // 压栈操作
    this.push = function (element) {
        items.push(element)
    }

    // 出栈操作
    this.pop = function () {
        return items.pop()
    }

    // peek操作
    this.peek = function () {
        return items[items.length - 1]
    }

    // 判断栈中的元素是否为空
    this.isEmpty = function () {
        return items.length == 0
    }

    // 获取栈中元素的个数
    this.size = function () {
        return items.length
    }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2);
myStack.push(2443)

var lastone = myStack.pop()

// 十进制转二进制
function Dec2Bin(num)
{
    var tStack = new Stack();

    var nMod = num;

    while(nMod > 0){
        tStack.push(nMod % 2);
        nMod = Math.floor( nMod / 2);
    }

    var sBin = ""
    while(!tStack.isEmpty())
    {
        sBin += tStack.pop();
    }

    return sBin;
}

console.log(Dec2Bin(5));

console.log("_____________")
var sText = "93432+";

function JudgeSign(nChar)
{
    if(parseInt(nChar))
    {
        return 1
    }else if(nChar == "(" || nChar == ")")
    {
        return 2
    }else if(nChar == "+" || nChar == "-" || nChar == "*" || nChar == '/')
    {
        return 3
    }

    return -1
}


function Exp2Prexp( sText )
{
    var sSign = new Stack();    //运算符号栈
    var sExp = ""
    for(var i = 0; i < sText.length; i ++)
    {
        var curSign = sText[i];

        var nType = JudgeSign(curSign);

        switch (nType) {
            case 1:
                sExp += curSign;
                break;
            case 2:
                if(curSign == "("){
                    
                }else{

                }
                break;
            case 3:
                
                break;
            default:
                break;
        }
    }

}

Exp2Prexp("d2d")

console.log(JudgeSign('1'))
console.log(JudgeSign('+'))
console.log(JudgeSign('('))
console.log(JudgeSign('a'))
console.log(JudgeSign('/'))
