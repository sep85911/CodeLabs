var a = document.getElementsByClassName('test1')[0];

a.style.color = "#321"
a.style.textDecoration = 'None';
a.style.backgroundColor = "pink";

var bSwitch = true;
a.onclick = function(){
    
    if(bSwitch)
    {
        this.style.backgroundColor = "blue"
        bSwitch = false;
    }else
    {
        this.style.backgroundColor = "pink"
        bSwitch = true;
    }
}
