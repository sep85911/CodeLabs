# -*- coding: utf-8 -*-
#IO操作

import codecs;
import os;


if __name__ == "__main__":
    
    # open函数 参数为：路径 读写模式 编码格式
    with codecs.open('./Python/Test001.py','r',encoding='utf-8') as f:
        lines = f.readlines();

        for line in lines:
            print(line);
