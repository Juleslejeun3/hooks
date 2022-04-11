import { useState, useEffect } from 'react';
export default function Filtre() {
    const [seachTerm, setSechTerm] = useState([""])

    useEffect(()=>{
        setSechTerm(seachTerm)
        },[])
        const handleSeachTerm = (e) => {
            let title = e.target.title;
            setSechTerm(title);
        }

    return (
        <div>
        <input type="text" name="search" id='search' placeholder='rechercher ici' onChange={handleSeachTerm} />
        </div>
    )
}
