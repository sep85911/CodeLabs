var mylist = new Array()
mylist[1] = "123";
mylist[2] = 123;


var a = -1 / 0
var b;
console.log(a)
console.log(b)
// console.log(c)

// var x = parseInt(window.prompt("input"))

// var content = document.getElementsByTagName("div")[0];
// content.innerHTML = x;
dd = 123;
document.write(window.dd + ' ')
dd = 321;
document.write(dd + " " + window.dd)

x = 312
console.log(x);
console.log(window.x)

function func001(a,b,c,d)
{
    console.log("this is func001")
    console.log(arguments.length) //这个length属性的意思是参数个数 其实 arguments就是参数数组
}

console.log("---------------")

console.log(c);

var c = function()
{

}

if(NaN + ""){
    console.log(1 + 34)
}


// 构造函数创建对象
function CObj(firstname,lastname,id,sex)
{
    this.mFirstName = firstname;
    this.mLastName = lastname;
    this.mID = id;
    this.mSex = sex;
}

var CPerson = 
{
    name:"Micah",
    age:36,
    sex:true,
    skill:function()
    {
        console.log("Fuck you!");
    }
}

console.log(screen.availHeight);
console.log(screen.availWidth);


var div1 = document.getElementById("level1");
var div2 = document.getElementById("level2");

console.log(div1.style.width = "200px");
console.log(div1.style.height = "300px");
console.log(div1.style.backgroundColor = "rgb(32,153,175)");


div1.children[0].style.width = "50px"
div1.children[0].style.height = "50px"
div1.children[0].style.backgroundColor = "#333"
