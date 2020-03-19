import os;
import sys;

import ToolFunction;

if __name__ == "__main__":
    obj001 = ToolFunction.CObj();

    print(obj001.ID);

    obj001.ID = -242;

    print(obj001.ID);