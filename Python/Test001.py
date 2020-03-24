import os;
import sys;
import re;

import ToolFunction;

from enum import Enum;

if __name__ == "__main__":
    obj001 = ToolFunction.CCreature();


    sWord = "abcdef234gefaf344dff34dfgd5765fegsdg3453grgrgfdfafefefefdsss";

    sPattern = "[A-Za-z]+";
    style001 = re.compile(sPattern);
    a = style001.findall(sWord);

    for i in a:
        print(i)

    obj002 = ToolFunction.CCustomCls("fucker");

    print(obj002);

    Opt = Enum("Options",("a","b","c","d"));

    #遍历枚举
    for name,member in Opt.__members__.items():
        print(name,member,member.value);

    # print(obj001.ID);

    