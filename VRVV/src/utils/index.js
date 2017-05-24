export const rotateOnHover = (count, index) => {
  const mod = count % 2;
  const oddMultiplier = Math.abs(Math.floor(count / 2) - index);
  const evenMultiplier = Math.abs(count);
  if (mod === 0) {
    if (index === count / 2 || index === count / 2 + 1) {
      return { rotateY: 0 };
    }
    if (index < count / 2) {
      return { rotateY: `${(index + 1) * 4}deg` };
    }
    if (index > count / 2) {
      return { rotateY: `${(index + 1) * -4}deg` };
    }
  } else {
    console.log(Math.floor(count / 2));
    if (index === Math.floor(count / 2)) {
      return 0;
    }
    if (index < Math.floor(count / 2)) {
      return oddMultiplier * 2;
    }
    if (index > Math.floor(count / 2)) {
      return oddMultiplier * -2;
    }
  }
};
