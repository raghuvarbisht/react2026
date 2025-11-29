import { useRef } from "react";

export default function CUseRef() {
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
