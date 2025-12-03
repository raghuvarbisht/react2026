import { useReducer } from "react";

type State = {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_AGE"; payload: number }
  | { type: "TOGGLE_ACTIVE" }
  | { type: "RESET" };

const initialState: State = {
  name: "",
  email: "",
  age: 0,
  isActive: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "TOGGLE_ACTIVE":
      return { ...state, isActive: !state.isActive };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: "SET_AGE", payload: Number(e.target.value) })
        }
      />

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={state.isActive}
          onChange={() => dispatch({ type: "TOGGLE_ACTIVE" })}
        />
        Active
      </label>

      <br /><br />

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <br /><br />

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
