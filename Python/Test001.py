import os;
import sys;
import re;

import ToolFunction;

if __name__ == "__main__":
    obj001 = ToolFunction.CCreature();


    sWord = "abcdef234gefafdffdfegsdggrgrgfdfafefefefdsss";

    sPattern = "[A-Za-z]+";
    style001 = re.compile(sPattern);
    a = style001.match(sWord);

    a.group(0);



    print(obj001.ID);