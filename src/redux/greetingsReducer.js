// Data fetching
const getData = async () => {
  const greeting = [];
  await fetch('http://127.0.0.1:3000/grettings').then((greeting) => greeting.json()).then((data) => {
    greeting.push(data);
  });
  return (greeting);
};

// Actions
const SHOW_GREETINGS = 'SHOW_GREETINGS';

// Reducer
const initialState = [];

export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

// Action creator
export const displayGreeting = () => async (dispatch) => {
  const greeting = await getData();

  dispatch({
    type: SHOW_GREETINGS,
    payload: greeting,
  });
};
