var btns = document.getElementsByTagName('button');

for(var i = 0; i < btns.length; i ++)
{
    btns[i].onclick = function(){

        console.log(111);
        for(var j = 0; j < btns.length; j++)
        {
            btns[j].className = "content";
        }

        this.className = "active";
    }
}

var div1 = document.getElementById('cube');

// 不能直接操作css 只能通过html里面的style间接操作css
div1.style.width = '100px';
div1.style.height = '100px';
div1.style.backgroundColor = "lightcoral";
div1.style.position = 'absolute';
div1.style.left = '100px';
div1.style.top = '123px';


//平移小方块
setInterval(function (){

    if( parseInt( div1.style.left ) < 900 )
    {
        div1.style.left = parseInt( div1.style.left ) + 1 + 'px'
    }

},50)

// 构造函数
function Player(id)
{
    this.id = id;
    this.name = "noname";
    this.age = 123;
}

var p1 = new Player(1);
console.log(p1.id);
console.log(p1.age);

var monster = {id:123,name:'mon1'};

console.log(monster);

var a = 321;
if(a > 123)
{
    console.log("yes");
}else if (b > 321)
{
    console.log("no");
}else
{
    console.log("I'm not sure");
}

function isArray(myData)
{
    console.log(arguments.length); //arguments对象里有参数信息
    return myData.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(123))

// 检查一个字符串是否有子串
console.log("frfrbbabcdd".indexOf("abc"))

console.log("看看这个变量的类型用typeof这个操作符：" + typeof String(123))

var divs = document.getElementsByTagName('div');

divs[0].style.width = "300px"

divs[1].className = "changetest"
// divs[1].style.backgroundColor = "#00f"

function changetext(id)
{

    console.log(id + " " + typeof id)
    if(id)
    {
        id.innerHTML = "fuck you!"
    }else
    {
        id.innerHTML = "rest!"
    }
}


function changecolor(id)
{
    var myself = document.getElementsByClassName("testclick")[0];
    myself.innerHTML = "yes!"
    myself.style.backgroundColor = "#ff0022"
}

function recovercolor(id)
{
    console.log("recovercolor")
    id.innerHTML = "recover"
    id.style.backgroundColor = "#123321"
}

function myclick001(id)
{
    console.log(id.innerHTML);
}