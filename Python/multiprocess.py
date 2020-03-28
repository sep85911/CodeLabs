# -*- codeing: utf-8 -*-

#多进程 多线程

import os;

if __name__ == "__main__":
    
    print(os.getpid()); #获取当前进程id

    pid = os.fork()
    if pid == 0:
        print('I am a child process %s and my parent proecess is %s ' % (os.getpid(),os.getppid()));
    else:
        print("I %s just create a child process %s " % (os.getpid(),pid));