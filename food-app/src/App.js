import React,{useEffect,useState} from 'react';
import "./App.css"
import Recipe from './reciepe';


const App = () =>{

  const Id = "56ac0be7";
  const key = "04bb013870757a05404fd8e5f41c772c";
  

const [reciepes, setReciepies] = useState([]);
const [search, setSearch] = useState('');
const [query,setQuery] = useState('chicken')

  //use Effect
useEffect(()=>{ 
  getReciepie();
  
},[query]);

//getting reciepie
const getReciepie = async () =>{
  const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${Id}&app_key=${key}`);
  const data = await res.json();
  setReciepies(data.hits);
  console.log(data.hits)
}

const updateSearch = e =>{
  setSearch(e.target.value);
  
}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
}
  return(
  <div className="App">
   <form onSubmit={getSearch} className="search-form">
   <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
   <button className="search-button" type="submit">
     Search
   </button>
   </form>
       <div className="recipes">

  {
    reciepes.map(recipe =>(
      <Recipe 
      key = {recipe.recipe.label}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
      
      />
    ))
  }
     </div>

  </div>
);
}
export default App;