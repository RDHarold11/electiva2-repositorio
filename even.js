const nums = [1, 2, 3, 4, 5, 6];

const isEvenOrNo = () => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      console.log(`${nums[i]} es par`);
    } else {
      console.log(`${nums[i]} es impar`);
    }
  }
};

isEvenOrNo();
