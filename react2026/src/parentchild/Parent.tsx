
import Child from "./Child";
const Parent = () => {

    const handleMessage = (msg : string) => {
        console.log("Meesage from child", msg);
        
    }
 
    return (
       <div>
          <Child onSendMessage={handleMessage}  />
       </div>

    )
    

}

export default Parent;