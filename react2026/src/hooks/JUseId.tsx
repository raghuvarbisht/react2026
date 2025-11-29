import { useId } from "react";

const JUserId = () => {
  const id = useId(); // unique, stable

  return (
    <div>
      <label htmlFor={id}>Enter Name</label>
      <input id={id} type="text" />


      <label htmlFor={`${id}-password`}>Password</label>
      <input id={`${id}-password`}  type="passsword" />
    </div>
  );
}

export default JUserId;