
---

## 一、文件选择题

1. 一般来说，Python把文件分为几种文件类型？  
   **A. 1**  
   **B. 2 ✅**  
   C. 3  
   D. 4  

2. Python原程序在Windows上的默认扩展名是：  
   A. exe  
   B. docx  
   C. jpg  
   **D. py ✅**

3. 当前程序路径在 `D:\PythonTest`，使用 `open()` 打开 D 盘根目录下文件，以下路径表示错误的是：  
   A. D:\a.txt  
   B. D:\\a.txt  
   **C. ../a.txt ✅**  
   **D. ..//a.txt ✅**

4. 关于Python的os库，以下描述正确的是：  
   A. os库仅适用于Windows平台  
   B. os库是一个第三方库  
   **C. os库提供了路径操作、进程管理等若干类功能 ✅**  
   D. os库功能有限  

5. Python标准库os中列出指定文件夹中文件和子文件夹的函数是：  
   A. listfile()  
   B. listdirs()  
   **C. listdir() ✅**  
   D. listfiles()  

6. 正确读取文件 `input.txt` 的方法是：  
   A. `open('input.txt','w')`  
   B. `open('input.txt',r)`  
   **C. `open('input.txt','r') ✅**  
   D. 都不正确  

7. 以下不是 Python 文件操作函数的是：  
   A. open()  
   B. read()  
   **C. load() ✅**  
   D. write()  

8. 以下不是合法的文件打开模式组合：  
   A. "a+"  
   **B. "t+" ✅**  
   C. "r+"  
   D. "w+"  

9. 关于 `open()` 函数的文件名，错误的是：  
   A. 文件名不能是一个目录  
   **B. 文件名对应的文件可以不存在，打开时不会报错 ✅**  
   C. 文件名可以是相对路径  
   D. 文件名可以是绝对路径  

10. 关于 Python 文件的 `'+'` 模式，描述正确的是：  
    **A. 与 r/w/a/x 一同使用，在原功能基础上增加同时读写功能 ✅**  
    B. 读模式  
    C. 追加写模式  
    D. 覆盖写模式  

11. 正确使用 `'r'` 模式打开 `users.txt` 的方式是：  
    A. `open('r', users.txt)`  
    B. `read('users.txt', 'r')`  
    **C. `open('users.txt', 'r') ✅**  
    D. `readlines('users.txt', r)`  

12. 打开已有文件并在末尾添加信息，正确的打开方式是：  
    A. 'r'  
    B. 'w'  
    **C. 'a' ✅**  
    D. 'w+'  

13. 文件 `book.txt` 内容为 `book`，以下代码输出结果是：  
    ```python
    f = open("book.txt")
    print(f.read())
    ```  
    **A. book ✅**  
    B. book.txt  
    C. txt  
    D. 以上都不对  

14. `fp1 = open("test.txt","r")`，以下哪个读取方式返回的不是字符串？  
    A. for line in fp1  
    B. line = fp1.read()  
    C. line = fp1.readline()  
    **D. line = fp1.readlines() ✅**（返回的是列表）

15. 关于读取文件，错误的是：  
    A. with 会自动关闭文件  
    **B. Python 对数据量没有大小限制 ✅**  
    C. open() 默认在当前目录查找  
    D. 文本读取为字符串  

16. 使用 `'r'` 模式打开文件，返回字符串内容的方法是：  
    A. write  
    B. input  
    C. get  
    **D. read ✅**  

17. 正确写入 `users.txt` 文件方式是：  
    A. `open('w', users.txt)`  
    B. `write('users.txt', 'w')`  
    **C. `open('users.txt', 'w') ✅**  
    D. `open('users.txt')`  

18. `data.txt` 内容为：`QQ&Wechat Google & Baidu`，以下程序输出是：  
    ```python
    f = open('data.txt','r')
    f.seek(2)
    print(f.read(7))
    f.close()
    ```  
    **D. &Wechat ✅**  

19. 打开二进制文件 `file1.dat`，可读可写追加方式是：  
    A. `open("d:\file1.dat","rb")`  
    B. `open("d:\file1.dat","wb")`  
    **C. `open("d:\file1.dat","ab+") ✅**  
    D. `open("d:\file1.dat","wb+")`  

20. 向文件写入内容的函数是：  
    A. open  
    **B. write ✅**  
    C. close  
    D. read  

21. 文件 `family.txt` 内容是 `We are family`，以下程序输出：  
    ```python
    m_file = open("family.txt", "r")
    txt = m_file.read()
    print(txt)
    m_file.close()
    ```  
    **D. We are family ✅**  

22. 读取一行内容的方法是：  
    A. file.read()  
    B. file.read(200)  
    **C. file.readline() ✅**  
    D. file.readlines()  

23. 以下代码中描述错误的是：  
    ```python
    fname = input("请输入要写入的文件: ")
    fo = open(fname, "w+")
    ls = ["清明时节雨纷纷，","路上行人欲断魂，","借问酒家何处有？","牧童遥指杏花村。"]
    fo.writelines(ls)
    fo.seek(0)
    for line in fo:
        print(line)
    fo.close()
    ```  
    **C. fo.seek(0) 这行代码可以省略，不影响输出效果 ❌**  

24. `city.csv` 内容如下：  
    ```
    巴哈马,巴林,孟加拉国,巴巴多斯
    白俄罗斯,比利时,伯利兹
    ```  
    执行：
    ```python
    f = open("city.csv", "r")
    ls = f.read().split(",")
    f.close()
    print(ls)
    ```  
    **B. ['巴哈马', '巴林', '孟加拉国', '巴巴多斯\n白俄罗斯', '比利时', '伯利兹'] ✅**

---

## 二、Numpy库

1. 输出维度：
    ```python
    import numpy as np
    data = np.ones((3,5))
    print(data.ndim)
    ```
    **D. 2 ✅**

2. 统计数组元素个数的方法是：  
   **A. `.size` ✅**  

3. 从列表中随机选取一个元素：  
   **B. choice() ✅**

4. 猜数游戏中填空：  
   ```python
   if num < 1 or num > 100:
       print("请输入1到100 之间的整数")
       ________
   ...
   elif num == num1:
       print("猜对了")
       ________
   ```  
   **C. continue; break ✅**

5. 二维矩阵平方值：  
   **B. `[[x**2 for x in row] for row in matrix] ✅**

6. 获取数组形状属性是：  
   **B. .shape ✅**

7. 创建 3x3 数组，错误的是：  
   **C. `np.random.randint(3,3)` ✅**（生成空数组）

8. 读取 `.npy` 文件的函数是：  
   **B. `load()` ✅**

9. `a = np.array([1,2,3,4])`，`a * 2` 结果是：  
   **A. `[2 4 6 8] ✅`**

10. 以下不是数据分析库的是：  
    **C. Spring ✅**

---

## 三、绘图（matplotlib）

1. 正确说法：  
   **C. 折线图可以用作查看特征间的趋势关系 ✅**

2. 绘制散点图的函数是：  
   **A. `plt.scatter(x, y)` ✅**

3. 红色五角星点短虚线的样式是：  
   **D. `'r*:' ✅`**

4. 中文显示相关参数是：  
   **B. `font.sans-serif` ✅**

5. 绘图流程说法错误的是：  
   **B. 添加图例可以在绘制图形之前 ❌**

6. 绘制散点图函数是：  
   **A. scatter() ✅**

7. 绘制条形图函数是：  
   **C. bar() ✅**

8. 与 `plt.subplot(324)` 同列的区域是：  
   **C. `plt.subplot(325)` ✅**

9. 用于绘图的库是：  
   **matplotlib ✅**

---

## 四、Pandas库

1. 数据分析第三方库是：  
   **B. pandas ✅**

2. Pandas可以读取的数据格式：  
   **D. 以上都是 ✅**

3. 读取 Excel 文件的函数是：  
   **A. read_excel() ✅**

4. 写入 CSV 文件的函数是：  
   **D. to_csv() ✅**

5. 查看行索引的属性是：  
   **A. index ✅**

6. `d = pd.Series([1,2,3],['a','b','c'])`，`d[1]` 结果是：  
   **B. 2 ✅**

7. 缺失值检测函数是：  
   **C. isnull() ✅**

8. 关于 `pd.Series(10, index=['a','b','c'])`，错误的是：  
   **D. s中每个元素的值是10 ❌**（其实是正确的）

9. `print(a.values)` 的结果是：  
   **C. `[[9 3], [8 2], [7 1], [6 0]] ✅`**

---
