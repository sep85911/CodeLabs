import calendar;


if __name__ == "__main__":
    
    print(calendar.isleap(2000)); # 判断是否为闰年

    print(calendar.weekday(2020,4,6));  # 返回星期几 0是星期一 6是星期日

    fullmonth = calendar.month(2020,4); #打印当月日历

    fullyear = calendar.calendar(2020); #打印全年日历

    print(fullmonth);
    print(fullyear);

    