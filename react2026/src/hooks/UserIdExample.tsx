/*
 * useId Hook Example
 * Definition 1: useId is a React Hook that generates unique, stable identifiers for form elements and accessibility.
 * Definition 2: The ID remains the same across renders and between client and server in Server Components.
 * Definition 3: It is primarily used for connecting labels to input elements using the htmlFor attribute.
 * Definition 4: It ensures accessibility compliance and prevents ID collisions when the same component is rendered multiple times.
 */

import { useId } from "react";

const UserIdExample = () => {
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

export default UserIdExample;