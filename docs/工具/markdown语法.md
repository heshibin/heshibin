---
title: markdown语法
---

## 基本语法
### 字体设置斜体、粗体、删除线
```
*倾斜*  
_倾斜_  
**加粗**  
***倾斜加粗***  
~~删除线~~  
```

### 标题
```
# 一级标题  
## 二级标题  
### 三级标题  
#### 四级标题  
##### 五级标题  
###### 六级标题  
```


### 链接
```
图片链接  
![描述](图片路径)  
超链接  
[描述](链接地址)  
```

### 分割线
```
多个 -
```

### 代码块

<pre>
行内代码  

`这里是代码`   

块级代码  

```java   

这里是代码  


```
</pre>

### 引用
```
> 引用内容  
  
嵌套引用  
>> 引用内容
  
引用内容中也可以使用其他md语法
```

### 列表
```
有序列表
1. 列表项1
2. 列表项2

无序列表
- 列表项1
- 列表项2
```

### 表格
```

|  1   |  2   |  3   |  
| :--  | :--: | --:  |  
|  1   |  1   |  1   |  
  
  
冒号在左边表示左对齐，中间表示居中对齐，右边表示右对齐。
```


## 常用技巧

### 换行
1. 连续使用两个以上空格加回车。
2. 使用HTML（`<br></br>`）换行。

### 缩进字符{#suojin}
1. 缩进1/4个中文（`&nbsp; &#160;`）
2. 缩进半个中文，1个字符（`&ensp; &#8194;`）
3. 缩进一个中文，两个字符（`&emsp; &8195;`）

### 特殊符号
增加\反斜杠即可显示符号本身  
其他特殊字符的Unicode编码可参考 [https://unicode-table.com/cn/](https://unicode-table.com/cn/)

### 字体、字号、颜色

`<font face="黑体" color="red" size="2">字体、字号、颜色</font>`
<font face="黑体" color="red" size="2">字体、字号、颜色</font>


