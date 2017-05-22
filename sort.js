// 排序算法的实现
/*
插入排序
算法描述和实现　

　　一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

1.从第一个元素开始，该元素可以认为已经被排序；
2.取出下一个元素，在已经排序的元素序列中从后向前扫描；
3.如果该元素（已排序）大于新元素，将该元素移到下一位置；
4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
5.将新元素插入到该位置后；
6.重复步骤2~5。
3）算法分析

最佳情况：输入数组按升序排列。T(n) = O(n)
最坏情况：输入数组按降序排列。T(n) = O(n2)
平均情况：T(n) = O(n2)
*/
function insertionSort(array){
	//if(Object.prototype.toString.call(array).slice(8,1)==='Array'){
		for(var i=1;i<array.length;i++){
			var key=array[i];
			var j=i-1;
			while(j>=0&&array[j]>key){
				array[j+1]=array[j];
				j--;
			}
			array[j+1]=key;
		}
		return array;
	//}
	//else{
	//	return 'array is not an Array';
	//}

}
// var arr=[2,4,1,5,8,6,9,0,11];
// console.log(insertionSort(arr));//输出 [ 0, 1, 2, 4, 5, 6, 8, 9, 11 ]

/*
二分插入排序
2）算法描述和实现　　

　　一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

1.从第一个元素开始，该元素可以认为已经被排序；
2.取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置；
3.将新元素插入到该位置后；
4.重复上述两步。

3）算法分析

最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(n2)
*/
function binaryInsertionSort(array){
	for(var i=1;i<array.length;i++){
		var key=array[i];
		var left=0;
		var right=i-1;
		while(left<=right){
			var middle=parseInt((left+right)/2);
			if(key<array[middle]){
				right=middle-1;
			}
			else{
				left=middle+1;
			}
		}
		for(var j=i-1;j>=left;j--){
			array[j+1]=array[j];
		}
		array[left]=key;
	}
	return array;
}
// var arr=[2,4,1,5,8,6,9,0,11];
// console.log(binaryInsertionSort(arr));//输出 [ 0, 1, 2, 4, 5, 6, 8, 9, 11 ]

/*
选择排序
算法描述和实现

　　n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：

1.初始状态：无序区为R[1..n]，有序区为空；
2.第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
3.n-1趟结束，数组有序化了。

3）算法分析

最佳情况：T(n) = O(n2)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(n2)
*/
function selectionSort(array){
	var len=array.length;
	var temp;
	for(var i=0;i<len-1;i++){
		var min=array[i];
		for(var j=i+1;j<len;j++){
			if(array[j]<min){
				temp=min;
				min=array[j];
				array[j]=temp;
			}
		}
		array[i]=min;
	}
	return array;
}
// var arr=[2,4,1,5,8,6,9,0,11];
// console.log(selectionSort(arr));//输出 [ 0, 1, 2, 4, 5, 6, 8, 9, 11 ]

/*
冒泡排序
2）算法描述和实现

　　具体算法描述如下：

1.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
3.针对所有的元素重复以上的步骤，除了最后一个；
4.重复步骤1~3，直到排序完成。

3）算法分析

最佳情况：T(n) = O(n)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(n2)
*/
function bubbleSort(array){
	var len=array.length;
	var temp;
	for(var i=0;i<len-1;i++){
		for(var j=len-1;j>=i;j--){
			if(array[j]<array[j-1]){
				temp=array[j];
				array[j]=array[j-1];
				array[j-1]=temp;
			}
		}
	}
	return array;
}
// var arr=[2,4,1,5,8,6,9,0,11];
// console.log(bubbleSort(arr));//输出 [ 0, 1, 2, 4, 5, 6, 8, 9, 11 ]

/*
快速排序
2）算法描述和实现

　　快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：

从数列中挑出一个元素，称为 "基准"（pivot）；
重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
3）算法分析
最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(nlogn)
*/


//方法一
function quickSort(array,left,right){
	if(left<right){
		var x=array[right];
		var i=left-1;
		var temp;
		for(var j=left;j<=right;j++){
			if(array[j]<=x){
				i++;
				temp=array[i];
				array[i]=array[j];
				array[j]=temp;
			}
		}
		quickSort(array,left,i-1);
		quickSort(array,i+1,right)
	}
}
// var a=[2,3,7,4,8,1,9];
// quickSort(a,0,a.length-1);
// console.log(a)
//方法2
var quickSort=function(array){
	if(array.length<=1){
		return array;
	}
	var pivotIndex=Math.floor(arr.length/2);
	var pivot=array.splice(pivotIndex,1)[0];
	var left=[];
	var right=[];
	for(var i=0;i<array.length;i++){
		if(array[i]<pivot){
			left.push(array[i]);
		}
		else{
			right.push(array[i]);
		}
	}
	return quickSort(left).concat([pivot],quickSort(right));

}
/*
堆排序
2）算法描述和实现

　　具体算法描述如下：

1.将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；
2.将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,......Rn-1)和新的有序区(Rn),且满足R[1,2...n-1]<=R[n]；
3.由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,......Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。

3）算法分析

最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(nlogn)
平均情况：T(n) = O(nlogn)
*/
/*方法说明：堆排序
@param  array 待排序数组*/            
function heapSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }
        
        //堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}

/*
归并排序
2）算法描述和实现

　　具体算法描述如下：

把长度为n的输入序列分成两个长度为n/2的子序列；
对这两个子序列分别采用归并排序；
将两个排序好的子序列合并成一个最终的排序序列。

3）算法分析

最佳情况：T(n) = O(n)
最差情况：T(n) = O(nlogn)
平均情况：T(n) = O(nlogn)
*/
function mergeSort(array, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}
function merge(array, p, q, r) {
    var n1 = q - p + 1, n2 = r - q, left = [], right = [], m = n = 0;
    for (var i = 0; i < n1; i++) {
        left[i] = array[p + i];
    }
    for (var j = 0; j < n2; j++) {
        right[j] = array[q + 1 + j];
    }
    left[n1] = right[n2] = Number.MAX_VALUE;
    for (var k = p; k <= r; k++) {
        if (left[m] <= right[n]) {
            array[k] = left[m];
            m++;
        } else {
            array[k] = right[n];
            n++;
        }
    }
}