import { useState } from "react";

const UserApplicationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [city , setCity] = useState('');

    const [skills, setSkills] = useState<string[]>([]);

    const handleSkills = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value , event.target.checked)

        const {value, checked} = event.target;

        if(checked){
            setSkills([...skills , value]);
        } else {
             setSkills([...skills.filter((item) => item !== value )]);
        }
    }

    const setClear = () => {
        setName('');
        setEmail('');
        setAge('');

    }
    return (
        <div>
            <h1>User Form</h1>
            
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}  
                    placeholder="enter name"/>
                <br/> <br/>
                <input 
                    type="text"  
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    placeholder="enter email"/>
                 <br/> <br/>
                <input 
                    type="number" 
                    min={0}
                    max={120}
                    value={age} 
                    onChange={(event) => setAge(event.target.value)}
                    placeholder="enter age"/>
                 <br/> <br/>

                 Gender
                 <input 
                    type="radio" 
                    value={"male"} 
                    checked ={gender === 'male'}
                    onChange={(event)=> setGender(event.target.value)} 
                    name ="gender" 
                    id="male"/>
                 <label htmlFor="male">Male</label>

                 <input 
                    type="radio" 
                    value={"female"} 
                    checked ={gender === 'female'}
                    onChange={(event)=>setGender(event.target.value)} 
                    name ="gender" 
                    id="female"/>
                 <label htmlFor="female">Female</label>
                 <br/>
                 <h3>
                    Skills
                 </h3>
                 
                 <input type="checkbox" onChange={handleSkills} id="php" value="php"/>
                 <label htmlFor="php">PHP</label>
                 <br/><br/>
                 <input type="checkbox" onChange={handleSkills} id="node" value="node"/>
                 <label htmlFor="node">Node</label>

                <br/><br/>

                <h3>Select city</h3>
                <select onChange={(event) => setCity(event.target.value)} defaultValue={'Noida'}>
                    <option>Delhi</option>
                    <option>Noida</option>
                    <option>Gurugram</option>

                </select>
                <br/>
                <br/>

                <button onClick={setClear}>Clear</button>

                <div>
                    name : {name}
                    <br/>
                    email : {email}
                    <br/>
                    age : {age}
                    <br/>
                    gender: {gender}
                    <br/>
                    skill: {skills.toString()}
                    <br/>
                    city: {city}

                </div>

        </div>
    )
}

export default UserApplicationForm;