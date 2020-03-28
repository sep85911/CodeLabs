# -*- coding: utf-8 -*-
#错误 异常 枚举类

from ToolFunction import CObj;
from enum import Enum;


def testError(n):
    return 10 / n;


class MyDirect(Enum): #继承Enum类 
    UP = 0
    DOWN = 1
    LEFT = 2
    RIGHT = 3

class CPeople(CObj):
    Step = MyDirect.UP;

    def goDown(self,dir):
        if isinstance(dir,MyDirect):
            self.Step = dir;
            return True;
        
        return False;

if __name__ == "__main__":
    p1 = CPeople();

    print(p1.Step);

    p1.goDown(MyDirect.LEFT);

    print(p1.Step);