# -*- coding: utf-8 -*- 

class CObj(object):

    def __init__(self):
        self.__id = 0;
        self.__name = "init name";

    @property
    def ID(self):
        return self.__id;

    @ID.setter
    def ID(self,val):
        if val < 0:
            return
        self.__id = val;
        print("成功设置ID!")

class CCreature(CObj): #就算子类什么都不做，还是有和父类一样都东西
    pass;

# 我自己都定制类学习专用类 嘿嘿
class CCustomCls:

    def __init__(self,name):
        self.name = name;
        self.a, self.b = 0,1;

    def __str__(self):
        return "This is my CustomClass %s " % self.name;

    def __iter__(self):
        return self; #实例本身就是迭代对象 故返回自己

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b;
        if self.a > 100000:
            raise StopIteration();
        return self.a;

    def __getitem__(self,index): # 返回索引所在的值 必须传入index
        if isinstance(index,int):
            a ,b = 1,1;
            for i in range(index):
                a,b = b,a + b;
            return a;
        elif isinstance(index,slice):
            start = index.start;
            stop = index.stop;
            step = index.step; #没有对step作处理 好烦！
            if start is None:
                start = 1;
            L = [];
            a,b = 1,1;
            for i in range(stop):
                if a >= start:
                    L.append(a);
                a,b = b,a + b;
            return L

    def __getattr__(self,attr): #访问不存在对属性时 可以用这个函数处理 接受一个参数：要访问的属性名
        if attr == "age":
            return 123;
        else:
            return "no this attr";

    def __call__(self): #定义了这个函数 类的实例a就可以调用 像这样：a()
        return "这个东西可以被调用噢！";


        

    