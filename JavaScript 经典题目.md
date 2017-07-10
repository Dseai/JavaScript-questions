# JavaScript 经典题目
## NO.1
    (function(){
    	return typeof arguments;
    })();
> 答案：“object”

arguments是对象,伪数组有两件事要注意这里：

参数不是数组，它是一个数组一样的物体,你可以使用方括号和整数索引的元素，
但方法通常可在一个如推上不存在参数数组 
Array.prototype.slice.call(arguments); 转成数组，当然arguments即使是数组,返回的依然是”object”,
因为数组也是对象。 
附加：typeof 对类型的判断

## NO.2
     var f=function g(){return 23;}
    typeof f;//function
    typeof f();//number
    typeof g();//referenceError;
    typeof g;//undefined
 函数实际上是绑定到变量f，不是g。

指定的标识符在函数表达式虽然有其用途：堆栈跟踪是清晰而不是充斥着无名的函数，
你可以有一个匿名函数递归调用本身不使用argument.callee

## NO.3
    (function(x){
    	delete x;
    	return x;
    })(1);
>答案 ：1

## NO.4
    var y=1,x=y=typeof x;
    x;
>答案：”undefined”

通过重写代码如下结果:

var a, b;
 
展开就是 var a; var b;.

A = B = C；相当于 B = C = B； 
知道了这一点，我们重写并得到：

    var y=1;
    y=typeof x;
    var x=y;
    x;
当执行，y = typeof x时，x 还没有被定义，所以y成为字符串”undefined”，然后被分配到x。
## NO.5
    (function f(f){
    	return typeof f();
    })(function(){
    	return 1;
    });
>答案：number

为了便于理解我们继续分解:

第一部分：

    var baz=function(){
    	return 1;
    }
第二部分：

    (function f(f){
    	return typeof f();
    })(baz);

在这里，函数f接受一个参数是另一个函数,f函数内部执行这个实参函数并且返回类型
无论是从调用该函数返回,即使参数名称f与函数名冲突，函数接受本身作为自己的参数，
然后调用，此时就看谁更具有更高的优先级了，显然，参数的优先级更高，
所以实际执行的是return typeof 1


## NO.6
    var foo={
    	bar:function(){
    		return this.baz;
    	},
    	baz:1
    };
    (function(){
    	return typeof arguments[0]();
    })(foo.bar);

>答案： “undefined”

为什么是”undefined”？我们必须要知道this运算符是怎么工作的。

JS语言精粹总结的很精炼:

* 纯粹的函数调用
* 作为对象方法的调用
* 作为构造函数调用
* apply调用
我们看看题目是属于那种环境？

在arguments0中执行了一个方法,arguments[0]就是foo.bar方法，注意:这在foo.bar中的this是没有绑定到foo。
虽然 foo.bar 传递给了函数，但是真正执行的时候，函数 bar 的上下文环境是 arguments，并不是 foo。

arguemnts[0] 可以理解为 arguments.0（不过写代码就不要这样了，语法会错误的），
所以这样看来，上下文环境是 arguemnts 就没问题了，所以在执行baz的时候自然this就是window了，
window 上没有baz属性，返回的就是undefined，typeof调用的话就转换成”undefined”了。


## NO.7
    var foo={
    	bar:function(){
    		return this.baz;
    	},
    	baz:1
    };
    typeof(f=foo.bar)();
> 答案：undefined

 继续改写：
    var foo={
    	bar:function(){
    		return this.baz;
    	},
    	baz:1
    };
    f=foo.bar;
    typeof f();

把foo.bar存储给f然后调用，所以this在foo.bar引用的是全局对象，所以就没有baz属性了。
换句话说，foo.bar执行的时候上下文是 foo，但是当 把 foo.bar 赋值给 f 的时候，
f 的上下文环境是 window ，是没有 baz 的，所以是 ”undefined”。


##NO.8
    var f=(function f(){
    	return 1;
    },function g(){
    	return 2;
    })();
    
    typeof f;
>答案：number;

逗号操作符：

    var x=(1,2,3);
    x;
 
x的值是3,这表明，当你有一系列的组合在一起，并由逗号分隔的表达式，它们从左到右进行计算，
但只有最后一个表达式的结果保存。由于同样的原因，这个问题可以改写为减少混乱：
 
    var f=(function g(){
    	return 2;
    })();
    typeof f;

## NO.9

    var x=1;
    if(function f(){}){
    	x+=typeof f;
    }
    x;
>答案：1undefined
 
这里有个难点，if 中的 function f(){} 要如何处理？

函数声明的实际规则如下：

函数声明只能出现在程序或函数体内。
	从句法上讲，它们不能出现在Block（块）（{ … }）中，
	例如不能出现在 if、while 或 for 语句中。因为 Block（块） 中只能包含Statement语句， 
	而不能包含函数声明这样的源元素。另一方面，仔细看一看规则也会发现，
	唯一可能让表达式出现在Block（块）中情形，就是让它作为表达式语句的一部分。
但是，规范明确规定了表达式语句不能以关键字function开头。而这实际上就是说，
函数表达式同样也不能出现在Statement语句或Block（块）中（因为Block（块）就是由Statement语句构成的）。

假设代码我们不妨变一下：

    var x=1;
    if(function(){}){
    	x+=typeof f;
    }
    x;
    x+=typeof f;
    x;

 f 在这了没有被定义，所以typeof f 是字符串”undefined” ，字符与数字相加结果也是一个字符串，
 所以最后的x就是”1undefined”了。

## NO.10
(function f(){
	function f(){return 1;}
	return f();
	function f(){
		return 2;
	}
})();


>答案 2

如果是一直看下来的话，这个题目应该是比较简单。简单的来说在执行return之前，
函数声明会在任何表达式被解析和求值之前先被解析和求值，即使你的声明在代码的最后一行，
它也会在同作用域内第一个表达式之前被解析/求值。

参考如下例子，函数fn是在alert之后声明的，但是在alert执行的时候，fn已经有定义了


    alert(fn());
    function fn(){
    	return "hello world";
    }

所以题目中函数提升了两次，第二次把第一次覆盖了，所以 return 后面的 f 是 return 语句的下一条语句声明的函数 f 。
注意自执行函数 (function f (){})(); 中的 f 并没有函数提升效果，它是表达式。

##NO.11
    function f(){
    	return f;
    }
    new f() instanceof f;

>答案 false

怎样去理解？

new f() ， 首先这个操作会创建一个新对象并调用构造函数函数这一新的对象作为它的当前上下文对象。简单的说 ，

new f();

依稀记得高级程序设计里面是这么说的：

* 创建空对象。
* 将类的prototype中的属性和方法复制到实例中。
* 将第一步创建的空对象做为类的参数调用类的构造函数
* 默认如果没有覆盖这个空对象的话,返回this

    var a=new Object;

a instanceof Object 为 true 
我们在看 f() 返回了 return f；那么也就是说这个新的对象是是自身,
构造函数本身在 new 的过程中会返回一个表示该对象的实例。但是函数的返回值覆盖了这个实例，
这个new 就形同虚设。果f的形式为 function f(){return this}或function f(){}就不一样。

    var a=new f();
    a instanceof f; //false

值得注意的是instanceof检测的是原型

##NO.12
    var x=[typeof x,typeof y][1];
    typeof typeof x;
>答案：string


这题目比较简单，注意下返回类型即可。x = [,][1]；即 x = typeof y = ‘undefind’。

typeof 返回的是string类型就可以了 ，typeof typeof必然就是’string’了。


## NO.13
    (function(foo){
    	return typeof foo.bar;
    })({foo:{bar:1}})
> 答案：undefined

先分解一下

    var baz={
    	foo:{
    		bar:1
    	}
    };
    (function(foo){
    	return typeof foo.bar;
    })(baz);

  去掉函数关联

    var baz={
    	foo:{
    		bar:1
    	}
    };
    var foo=baz;
    typeof foo.bar;

最后，通过替换我们可以除去中间变量 foo

    var baz={
    	foo:{
    		bar:1
    	}
    }
    typeof baz.bar;

所以现在就很清晰了，属性中没有定义baz；它被定义为baz.foo上了，所以结果是：”undefined”。
