import { useEffect, useRef } from "react";
import { useForm, useFormState } from "react-hook-form";

type UserFormValues = {
    username: string
    email: string
    city: string
}

export const UserFormWatchWithUseRef = () => {
  const { register, control, handleSubmit, watch } =
    useForm<UserFormValues>();

  const { errors } = useFormState({ control });

  
  const formDataRef = useRef<Partial<UserFormValues>>({});

  useEffect(() => {
    const subscription = watch((value) => {
      formDataRef.current = value; // ✅ no re-render
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = () => {
    console.log("submitted", formDataRef.current);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Name</label>
      <input {...register("username", { required: "Username required" })} />
      <p>{errors.username?.message}</p>
      <label>email</label>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>
        <label>city</label>
      <input {...register("city")} />
      <p>{errors.city?.message}</p>

      <button>Submit</button>
    </form>
  );
};
