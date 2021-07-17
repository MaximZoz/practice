let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 19, 20, 22, 35, 65,
];

let binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.round((right - left) / 2) + left;

    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, 35));


//*  https://www.youtube.com/watch?v=9EmO9_MK1gQ&t=260s
