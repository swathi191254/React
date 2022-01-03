import './reciepe.css'

 export const Recipe = () =>{
    return(
        <div className="left-div">
            <h1 style={{color:"pink"}}>Add a recipe</h1>
            <form >
                <label >Title</label>
                <br/>
                <input type="text" name="title" placeholder="Title" />
                <br/>
                <label >Ingredients</label>
                <br/>
                <input type="text" name="title" placeholder="Ingredients" />
                <br/>
                <label >Time</label>
                <br/>
                <input type="number" name="title" placeholder="Time" />
                <br/>
                <label >Instructions</label>
                <br/>
                <input type="text" name="title" placeholder="Instructions" />
                <br/>
                <br/>
                <input type="submit" id="submit" placeholder="Submit"/>
                <br/>
            </form>
        </div>
    )
}
