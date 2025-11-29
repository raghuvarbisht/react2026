


import './App.css'
import AContextComponent from './hooks/contextApi/AContextComponent';
import { SubjectContext } from './hooks/contextApi/CreateContext';
import { useState } from 'react';



/*
import UsersDetails from './components/users/UsersDetails';
import FirstUseState from './hooksExample/FirstUseState';
import HideShow from './hooksExampleExample/HideShow';
import Condition from './hooksExample/Condition';
import UserComponent from './props/UserComponent';
import UserForm from './hooksExample/UserForm';
import Wrapper from './wrapper/Wrapper';
import UserApplicationForm from './hooksExample/UserApplicationForm';
import BUseEffect from './hooks/BUseEffect';
import Parent from './parentchild/Parent';
import HooksExample from './hooks/HooksExample';
import DerivedState from './derivedstate/DerivedState';
import LiftingState from './liftingstate/LiftingState';
import ObjectUseState from './stateupdate/ObjectUseState';
import ArrayUseState from './stateupdate/ArrayUseState';
import IUseActionState from './hooks/IUseActionState';
import JUserId from './hooks/JUseId';
*/


 

function App() {
  const userName = "Raghuvar";
  let x =10;

  const [subject, setSubject] = useState('English')

  return (
    <>
    {
      /*
        <h1>Title page</h1>
        <h2>My name is {userName}</h2>
        <h2>value of x is {x}</h2>
        <UsersDetails/>
        <FirstUseState/>
        <HideShow/>
        <Condition/>
        <UserComponent/>
        <Wrapper>
          <h1>Wrapper for testing</h1>
        </Wrapper>
        <UserForm/>
        <UserApplicationForm/>
        <Parent/>        
        <HooksExample/>
        <DerivedState/>
        <LiftingState/>
        <ObjectUseState />
        <ArrayUseState />        
        <IUseActionState />
        <JUserId/>
        <JUserId/>
        <JUserId/>
      */
    }  
    
    <SubjectContext.Provider value={subject}>
      Select subject : <select onChange={(event) => setSubject(event?.target.value)}>
        <option value="English"> English</option>
        <option value="Hindi"> Hindi</option>
        <option value="Math"> Math</option>
        <option value="Science"> Science</option>
      </select>
      <AContextComponent/>
    </SubjectContext.Provider>
    
      
    </>
  )
}

export default App
