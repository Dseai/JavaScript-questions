  
## 牛客网
   
##NO.1

    var name=’World!’;
    (function() {
    if(typeof name===’undefined’) {
    var name=’Jack’;
    console.log(‘Goodbye’+name);
    } else {
    console.log(‘Hello’+name);
    }
    })();

> 最后输出 GoodbyeJack

    (function(){
    var name;//注意这里，变量提升
    if(typeof name === 'undefined'){
    name = 'Jack';
    console.log('Goodbye'+name);
    }else{
    console.log('hello'+name);
    }
    })();

##NO.2

    if(! "a" in window){
    var a = 1;
    }
    alert(a);
>undefined

等价于
var a;
if(!"a"in window){
a =1;
}
alert(a);

1. JavaScript无块级作用域，在全局作用域中声明变量a为window的属性；
2. window存在属性a，if语句不成立，a=1赋值语句不执行；
3. 弹出变量a为undefined；

## NO.3 
问题： 用户从手机的浏览器访问www.baidu.com，看到的可能跟桌面PC电脑，是不太一样的网页效果，会更适合移动设备使用。请简要分析一下，实现这种网页区分显示的原因及技术原理。
>参考答案：手机的网速问题、屏幕大小、内存、CPU等。通过不同设备的特征，实现不同的网页展现或输出效果。根据useragent、屏幕大小信息、IP、网速、css media Query等原理，实现前端或后端的特征识别和行为改变。
## NO.4
列举JS异步编程的办法

1. 回调函数，这是异步编程最基本的办法
2. 事件监听，另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
3. 发布/订阅，上一节的“事件”，万群可以理解成“信号”
4. Promise对象，Promise对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。
## NO.5
HTML的DocType作用？严格模式与混杂模式如何区分？他们有何意义？
>
1. <DOCTYPE>声明位于最前面，处于<html>标签之前。告知浏览器的解析器，用什么类型来解析这个文档。
2. 严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行。在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
3. DOCTYPE不存在或者格式不正确会导致文档以混杂模式呈现。
## NO.6
请用CSS实现如下图的样式，相关尺寸如图示，其中dom结构为：
<div id=”demo”></div>
![](http://i.imgur.com/TrzSbuT.png)

    #demo {
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    position: relative;
    }
    #demo:after {
    content: '';
    display: block;
    width: 14.1421px;
    height: 14.1421px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    position: absolute;
    right: -10px;
    top: 20px;
    transform: rotate(45deg);
    background-color: #fff;
    }
>解题思路：
>
1. 将三角形用一个正方形来实现
2. 设置其上border,右border的宽度
3. 设置其背景颜色为白色以覆盖掉父元素的border
4. 使用transform: rotate 来让该正方形旋转
5. 使用top,left来对其定位
 
## NO.7
* 不稳定：快选堆希
* 稳	定：插冒归基
## NO.8
* 表单对象的名称由 *name* 属性设定；
* 提交方法由 *method* 属性设定；
* 若要提交大数据量的数据，应采用 *post* 方法
* 表单提交后的数据处理程序由 *action* 属性指定

* 设置RadioButton控件的 *GroupName* 属性控制用户在多个单选按钮中只能选一个
* 实现滚动文字的标记 *&lt;Marquee&gt;*
## NO.9

开箱即用组件

* YUI：Yahoo！User Interface库包含一个bucketload
* ExtJS包含大量开箱即用的组件，其中很多功能强大的网格控件，支持内联编辑、分页、筛选、分组、汇总、缓冲和数据绑定
* MooTools和Prototype、jQuery不包含开箱即用的UI控件和小部件
## NO.10
能读取文件全部内容的函数：

* file
* file_get_contents()
* readfile()
## NO.11
TextBox 控件的TextMode属性有 *singleLine* *password* *multiline* 三种属性