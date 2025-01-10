export function diaryReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((diary) =>
        diary.id === action.data.id ? action.data : diary
      );
    case "DELETE":
      return state.filter((diary) => diary.id !== action.id);
    case "SEARCH_MONTH": {
      const { beginTime, endTime } = action.data;

      return state.filter(
        (diary) =>
          diary.createdDate >= beginTime && diary.createdDate <= endTime
      );
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
