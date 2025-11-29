import BContextComponent from './BContextComponent';  
const AContextComponent = () => {

    return (
        <div style={{backgroundColor:"yellow" , padding:"10px"}}>
            Component A
           <BContextComponent/>
        </div>
    )

}

export default AContextComponent;