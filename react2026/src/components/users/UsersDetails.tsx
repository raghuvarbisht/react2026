
const getUserName = (name : string) => {
        alert(name);
    }
const UsersDetails = () => {
    const  getUserDetails = () => {
        alert('getuser details');
    }

    const getUserName = (name : string) => {
        alert(name);
    }
    return (
        <div>
            <h1>User Details</h1>
            <button onClick={getUserDetails}>Get details</button>
            <button onClick={() => getUserName('Amit')}>Get Name</button>
        </div>
    )
}
export default UsersDetails;
