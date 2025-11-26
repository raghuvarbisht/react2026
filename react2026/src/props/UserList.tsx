type User = {
    name: string;
    age: number;
}
const UserList = ({user}: {user: User}) => {

    return (
        <>
            <div style={{color: "green" , border: "1px solid green"}}>
                <div> name : {user.name} </div>
                <div>age : {user.age} </div>
            </div>

        </>
    )

}

export default UserList;