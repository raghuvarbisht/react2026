import CContextComponent from "./CContextComponent";

const BContextComponent = () => {

    return (
        <div style={{backgroundColor:"green" , padding:"10px"}}>
            Component B
            <CContextComponent/>
        </div>
    )

}

export default BContextComponent;