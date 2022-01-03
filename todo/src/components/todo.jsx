import { useState} from "react";

export const todo = () =>{
const [text, setText] = useState("");

return(
    <div>
        <input type="text" name="" id=""
        onChange={(e)=>setText(e.target.value)}
        placeholder="Enter todo" />
    </div>
)
}

export default todo;