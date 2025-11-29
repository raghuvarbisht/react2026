


import './App.css'

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
*/

import DerivedState from './derivedstate/DerivedState';
 

function App() {
  const userName = "Raghuvar";
  let x =10

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
      */
    }  
    <DerivedState/>
      
    </>
  )
}

export default App
