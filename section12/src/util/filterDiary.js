const getSortedDate = (diary, sortType) => {
  return diary.toSorted((a, b) => {
    if (sortType === "oldest") {
      return a.createdDate - b.createdDate;
    } else {
      return b.createdDate - a.createdDate;
    }
  });
};

export const filterDiary = (date, diary, sortType) => {
  const beginTime = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  const endTime = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getTime();

  const filteredDiary = diary.filter((v) => {
    return v.createdDate >= beginTime && v.createdDate < endTime;
  });

  return getSortedDate(filteredDiary, sortType);
};
