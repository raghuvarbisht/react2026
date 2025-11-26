const Wrapper = ({children} :  { children: React.ReactNode }) => {
    return (
        <div style={{ color: "green", border:"1px solid green" , padding: "10px"}}>
           {children}
        </div>
    )
}

export default Wrapper;