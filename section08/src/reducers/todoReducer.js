//* 이렇게 파일로 분리하여 사용가능!
export default function todoReducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
  throw new Error("Unhandled action type");
}
