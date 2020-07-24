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


