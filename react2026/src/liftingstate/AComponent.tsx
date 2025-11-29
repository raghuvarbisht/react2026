const AComponent = (props : any) => {

    return (
        <div style={{border: "1px solid green" , padding: "10px", margin:"10px"}}>
            <h1> Child A</h1>
            <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
            <br/><br/>
            Entered name: {props.name}
            
        </div>
    )

}

export default AComponent;