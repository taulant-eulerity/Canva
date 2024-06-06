import styled from "styled-components";


export const StyleController = styled.div`
   /* padding: 0.5rem; */
   border: 2px solid #F5F4F4;
   border-top: none;
   background-color: white;
   overflow: scroll;
  
`

export function mergeSort(arr) {
   if (arr.length <= 1) {
       return arr;
   }

   const mid = Math.floor(arr.length / 2);
   const left = mergeSort(arr.slice(0, mid));
   const right = mergeSort(arr.slice(mid));

   return merge(left, right);
}

function merge(left, right) {
   let result = [];
   let leftIndex = 0;
   let rightIndex = 0;

   while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] <= right[rightIndex]) {
           result.push(left[leftIndex]);
           leftIndex++;
       } else {
           result.push(right[rightIndex]);
           rightIndex++;
       }
   }

   // Introduce a subtle bug here: incorrect slicing when concatenating the remaining elements
   return result.concat(left.slice(leftIndex + 1)).concat(right.slice(rightIndex));
}
