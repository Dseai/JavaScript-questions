# JavaScript题目二
## NO.1
    window.setTimeOut(checkState(),10000);//立刻调用
    window.setTimeOut(checkState,10000);//10s后调用
    window.setTimeOut("checkState()",10000);//10s后调用
## NO.2
    ([])?truw:false //true
    ([]==false)?true:false; //true
    ({}==false)?true:false; //false

解析：

1. []转换成布尔= true;
2.  []==false ——> [].valueOf()==false ——> [].toString()==false ——> ""==false ——>true
3. {}==false ——> {}.valueOf()==false ——> {}.toString()==false ——> "[Object object]"==false ——>false

## NO.3

    var A={
    	n:4399
    }
    var B=function(){
    	return this.n=9999;
    }
    var C=function(){
    	var n=8888;
    }
    B.prototype=A;
    C.prototype=A;
    var b=new B();
    var c=new C();
    A.n++;
    console.log(b.n); //9999
    console.log(c.n); //4400

解析:

b.n首先找到b对象自身的属性n，没有找到向上查找，当执行

    var b=new B();

时，this指向b并返回b对象，b有n返回;

    var c=new C()

时，没有n向上查找，c中

    var n=8888 

只是创建了私有变量，并没有为对象执行任何操作

## NO.4
> filter过滤

    var arr=['A','B','C'];
    var i=arr.filter(function(element,index,self){
    	console.log(element); //A,B,C
    })
    var j=arr.filter(function(element,index,self){
    		console.log(index);  //0,1,2
    })
    var j=arr.filter(function(element,index,self){
    	console.log(self);  //arr
    })

去除重复元素
    var r,arr
    r=arr.filter(function(element,index,self){
    	return self.indexOf(element)===index;
    })

## NO.5
1.map
    
    function pow(x){
    	return x*x;
    }
    var arr=[1,2,3];
    var arr1=arr.map(pow); 
    console.log(arr1);//[1,4,9]
>map传入的参数是函数对象本身

    var arr=[1,2,3];
    var arr1=arr.map(String);
    console.log(arr1);//["1","2","3"]


2.reduce

>[x1,x2,x3].reduce(f)==f(f(x1,x2),x3);
    
    var arr=[1,3,5,7,9];
    var sum=arr.reduce(function(x,y){
    	return x+y;
    });
    console.log(sum); //25

## NO.6
    
    var obj=new Object();
    obj.name="obj";
    function changeObj(o){
    	o.name="changed";
    	o=new Object();
    	o.name="newObj";
    }
    changeObj(obj);
    console.log(obj);//changed

> 解析:函数内部创建的对象不会影响函数外面创建的属性值

## NO.7
>浅度拷贝，将obj对象引用的地址复制一份给obj1，obj1可以修改obj，如果变量的值不是对象和数组，修改后者不影响前者
>
>深度拷贝 $.extend([deep],target,obj1[,objN])
>第一个参数为true，会把第二个参数作为目标参数合并

    var obj={
    	name:'bar',
    	score:80
    }
    var obj1={score:{
    	english:80
    }}
    $.extend(true,obj,obj1);
    obj.score.english=10;
    console.log(obj.score.english);//10;
    console.log(obj1.score.english);//80;
    }

>无论怎么修改obj，obj1都不变
