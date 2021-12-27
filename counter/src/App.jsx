import {useState} from 'react';
import style from './App.css'



function App(){
    const [count,setCount] = useState(0);

    const add = () =>{
        setCount(count+1);
    }
    const sub = () =>{
        setCount(count-1);
    }
    const dub = () =>{
        setCount(count*2);
    }
    return(
<div className="app">
    <h2 className="count">Counter:{count}</h2>
    <button onClick={add} className="buta">Add</button>
    <button onClick={sub} className="buts">Sub</button>
    <button onClick={dub} className="butd">Double</button>

    

</div>
    );

};
export default App;