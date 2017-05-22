/*
数组方法总结
*/
//1.数组去重
//方法一 利用数组的indexOf
function unique(arr){
	var result=[];
	for(var i=0;i<arr.length;i++){
		if(result.indexOf(arr[i])==-1){
			result.push(arr[i]);
		}
	}
	return result;
}
//方法二 充分利用了递归和indexOf方法
var unique=function(arr,newArr){
	var num;
	if(-1==arr.indexOf(num=arr.shift())){
		newArr.push(num);

	}
	arr.length&&unique(arr,newArr);
}

//数组顺序乱序
//方法一：每次随机抽取一个数并且移动到新的数组中去
function shuffle(array){
	var copy=[];
	var n=array.length;
	var i;
	while(n){
		i=Math.floor(Math.random()*array.length);
		//如果这个元素之前没有被选中过
	if(i in array){
		copy.push(array[i]);
		delete array[i];
		n--;
	}
	}
}

//数组判断
//方法一
var array2=[];
Array.isArray(array2);
//方法二：
var array3=[];
array3.instanceof Array;
//方法三
function isArray(o){
	return Object.prototype.toString.call(o)==='[Object Array]';

}

//数组求交集
//利用filter和数组自带的indexOf方法
array1.filter(function(n){
	return array1.indexOf(n)!=-1
});

//数组求并集  连接两个数组并去重
function arrayUnique(array){
	var a=array.concat();
	for(var i=0;i<a.length;++i){
		for(var j=i+1;j<a.length;++j){
			if(a[i]===a[j]){
				a.splice(j--,1);
			}
		}
	}
	return a;
}
//两个数组求差集  利用filter和indexOf
Array.prototype.diff=function(a){
	return this.filter(function(i){
		return a,indexOf(i)<0;
	})
}
