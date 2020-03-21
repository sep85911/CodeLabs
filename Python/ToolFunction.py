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
    