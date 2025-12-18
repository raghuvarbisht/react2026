/*
 * useRef Hook Example
 * Definition 1: useRef is a React Hook that lets you reference a value that is not needed for rendering.
 * Definition 2: It returns a mutable object with a .current property that persists across re-renders.
 * Definition 3: Unlike state, updating a ref does not trigger a re-render of the component.
 * Definition 4: Common uses include accessing DOM elements directly and storing mutable values like timers or intervals.
 */

import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
