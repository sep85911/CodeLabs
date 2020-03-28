import os;
import sys;
import re;
import logging;

import ToolFunction;
import Expection;

if __name__ == "__main__":
    obj001 = ToolFunction.CCreature();


    sWord = "abcdef234gefaf344dff34dfgd5765fegsdg3453grgrgfdfafefefefdsss";

    sPattern = "[A-Za-z]+";
    style001 = re.compile(sPattern);
    a = style001.findall(sWord);

    for i in a:
        print(i)

    obj002 = ToolFunction.CCustomCls("fucker");

    obj002;
    print(obj002);

    for i in obj002:
        print(i);

    print(obj002.age);
    print(obj002.this);
    print(callable(obj002));
    print(callable(obj001));


    print('操作系统名字是：' + os.name)
    print(os.uname());

    print(os.environ.get("PATH"));

    # Opt = Enum("Options",("a","b","c","d"));

    #遍历枚举
    #for name,member in Opt.__members__.items():
     #   print(name,member,member.value);

    # print(obj001.ID);

    try:
        Expection.testError(0);
    except ZeroDivisionError as e:
        print('这里除数为0 出错了！')

    

    