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
        self.__name = name;

    def __str__(self):
        return "This is my CustomClass %s " % self.__name;

        

    