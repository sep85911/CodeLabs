# -*- codeing: utf-8 -*-

#多进程 多线程

import os,time,random;

from multiprocessing import Pool;

def long_time_task(name):
    print("This is %s" % (name));
    start = time.time();
    time.sleep(random.random() * 3);
    end = time.time();
    print("%s costs %0.2f secs" %(name,(end-start) ));

if __name__ == "__main__":
    
    print("Parent proecss is %s" % os.getpid()); #获取当前进程id

    p = Pool(4); #创建一个进程池
    for i in range(5):
        p.apply_async(long_time_task,args=(i,));
    
    print("Waiting for all subprocesses done");
    p.close();
    p.join();
    print("all subprocesses done");
    
    # 对Pool对象调用join()方法会等待所有子进程执行完毕，调用join()之前必须先调用close()，调用close()之后就不能继续添加新的Process了