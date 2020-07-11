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