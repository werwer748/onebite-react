// for
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // continue를 만나면 다음 반복으로 넘어간다.
  }
  console.log("반복!");
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
