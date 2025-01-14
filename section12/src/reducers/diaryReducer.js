export function diaryReducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      // 굳이 초기데이터를 스토리지에 다시 저장할 필요가 없음
      // nextState = action.data;
      // break;
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((diary) =>
        diary.id === action.data.id ? action.data : diary
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((diary) => diary.id !== action.id);
      break;
    }
    case "SEARCH_MONTH": {
      const { beginTime, endTime } = action.data;

      nextState = state.filter(
        (diary) =>
          diary.createdDate >= beginTime && diary.createdDate <= endTime
      );
      break;
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}
