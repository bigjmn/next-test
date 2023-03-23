import { useState } from "react";
const Games = () => {
    const [namer, setNamer] = useState('none yet')
    const handleClick = async () => {
        const newdata = await fetch('/api/hello')
        const newdatab = await newdata.json()
        console.log(newdatab)
        setNamer(newdatab.result.name)

    }
    return (
        <div>
            <h1>Hello Mr. Games</h1>
            <button onClick={handleClick}>try this</button>
            <h3>{namer}</h3>
        </div>
     );
}
 
export default Games;