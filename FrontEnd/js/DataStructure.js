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