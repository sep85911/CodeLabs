# -*- coding: utf-8 -*-
#IO操作

import codecs;
import os;
import shutil;

if __name__ == "__main__":
    

    shutil.copy()
    # open函数 参数为：路径 读写模式 编码格式
    with codecs.open('./Python/ToolFunction.py','rb',encoding='utf-8') as f:
        lines = f.readlines();

        for line in lines:
            print(line);
