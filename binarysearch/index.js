const  binarySearch = (arr, target)=>{

    let low_idx=0;
    let high_idx=arr.length-1;

    while(low_idx <= high_idx){
        const mid_idx = Math.floor((low_idx+high_idx)/2);

        const mid_val = arr [mid_idx];

        if(mid_val === target){
            return mid_idx;
        }
        else if(mid_val < target){
            low_idx = mid_idx +1;
        }
        else{
            high_idx = mid_idx -1;
        }
     }

     return -1;
}

console.log(binarySearch([1,2,4,5,6,7,8,9,10], 1))
export default binarySearch;