/* ------
import ClassCounter from './Components/UseState/ClassCounter';
import ClassCounterOne from './Components/UseEffect/ClassCounterOne';
import ClassCounterTwo from './Components/UseState/ClassCounterTwo';
import HookCounter from './Components/UseState/HookCounter';
import HookCounterOne from './Components/UseEffect/HookCounterOne';
import HookCounterTwo from './Components/UseState/HookCounterTwo';
import HookCounterObject from './Components/HookCounterObject';
import HookCounterArray from './Components/HookCounterArray';
import ClassMouse from './Components/UseEffect/ClassMouse';
import HookMouse from './Components/UseEffect/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/UseEffect/IntervalClassCounter';
import IntervalHookCounter from './Components/UseEffect/IntervalHookCounter';
import DataFetching from './Components/useEffect/DataFetching';
import ComponentA from './Components/useContext/ComponentA';
import CounterOne from './Components/useReducer/CounterOne';
import CounterTwo from './Components/useReducer/CounterTwo';
import CounterThree from './Components/useReducer/CounterThree';
import DataFetchingOne from './Components/useReducer/DataFetchingOne';
import DataFetchingTwo from './Components/useReducer/DataFetchingTwo';
import ParentComponent from './Components/useCallback/ParentComponent';
import Counter from './Components/useMemo/Counter';
import FocusInput from './Components/useRef/FocusInput';
import ClassTimer from './Components/useRef/ClassTimer';
import HookTimer from './Components/useRef/HookTimer';
import DocTitleOne from './Components/CustomHook/DocTitleOne';
import DocTitleTwo from './Components/CustomHook/DocTitleTwo';
import CustomCounterOne from './Components/CustomHook/CustomCounterOne';
import CustomCounterTwo from './Components/CustomHook/CustomCounterTwo';
------ */
import React from 'react';
import './App.css';
import UserForm from './Components/CustomHook/UserForm';

/* -----
import { useReducer } from 'react';
import CompA from './Components/ReducerWithContext/CompA';
import CompB from './Components/ReducerWithContext/CompB';
import CompC from './Components/ReducerWithContext/CompC';
----- */

export const UserContext = React.createContext();
export const ProfessionContext = React.createContext();

const App = function () {
   return (
      <div className="App">
         {/* <ClassCounter /> */}
         {/* <ClassCounterOne /> */}
         {/* <ClassCounterTwo /> */}
         {/* <HookCounter /> */}
         {/* <HookCounterOne /> */}
         {/* <HookCounterTwo /> */}
         {/* <HookCounterObject /> */}
         {/* <HookCounterArray /> */}
         {/* <ClassMouse /> */}
         {/* <HookMouse /> */}
         {/* <MouseContainer /> */}
         {/* <IntervalClassCounter /> */}
         {/* <IntervalHookCounter /> */}
         {/* <DataFetching /> */}
         {/* <UserContext.Provider value='Tanvir Rahman'>
            <ProfessionContext.Provider value='Programmer'>
               <ComponentA />
            </ProfessionContext.Provider>
         </UserContext.Provider> */}
         {/* <CounterOne /> */}
         {/* <CounterTwo /> */}
         {/* <CounterThree /> */}
         {/* <DataFetchingOne /> */}
         {/* <DataFetchingTwo /> */}
         {/* <ParentComponent /> */}
         {/* <Counter /> */}
         {/* <FocusInput /> */}
         {/* <ClassTimer /> */}
         {/* <HookTimer /> */}
         {/* <DocTitleOne /> */}
         {/* <DocTitleTwo /> */}
         {/* <CustomCounterOne /> */}
         {/* <CustomCounterTwo /> */}
         <UserForm />
      </div>
   );
}

/* ------
export const CountContext = React.createContext();

const initialState = 0;

const reducer = (cState, action) => {
   switch (action) {
      case 'increment':
         return cState + 1;

      case 'decrement':
         return cState - 1;

      case 'reset':
         return initialState;

      default:
         return cState;
   }
}

const App = function () {
   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
         <div className="App">
            <div>Count - {count}</div>
            <CompA />
            <CompB />
            <CompC />
         </div>
      </CountContext.Provider>
   )
}
------ */

export default App;
