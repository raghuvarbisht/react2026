import { useActionState } from "react";

const UseActionStateExample = () => {
    const handleSumbit = async (_previousData : any, formData : any) => {
        let name = formData.get('username');
        let pwd = formData.get('password'); 
        await new Promise(res => setTimeout(res,3000));
        console.log('name and password', name, pwd)
        if (name && pwd) {
            return {message: 'Submit successfuly' , name,pwd};
        } else {
            return {error: 'Faild to submit' , name,pwd}
        }
    }

    const [data, action, pending] = useActionState(handleSumbit ,undefined )

    return (
        <div>
            {
                data?.error && <span style={{ color: "red"}}> {data?.error}</span>
            }
            {
                data?.message && <span style={{ color: "green"}}> {data?.message}</span>
            }
            <form action={action}>
                <input type="text" name="username" placeholder="username"/>
                <br/><br/>
                <input type="password" name="password" placeholder="password"/>
                <br/><br/>
                <button disabled={pending}>
                    {pending ? 'Loggig in...' : 'Submit'}
                </button>
            </form>
            <div>
                user data : { JSON.stringify(data)}
            </div>
        </div>
    )


}

export default UseActionStateExample;