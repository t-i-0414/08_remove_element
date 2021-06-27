// https://leetcode.com/problems/remove-element/


const removeElement = (nums: any[], val: number): number => {
  let result = 0

  nums.forEach((num, i) => {
    if (num === val) {
      nums[i] = "_"
    } else {
      result = result +1
    }
  })

  nums.sort()

  console.log(nums)

  return result
};


export default removeElement
