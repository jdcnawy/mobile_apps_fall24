import {useState} from 'react';

import {ReactComponent as Heart} from '@material-design-icons/svg'

export default function UserRating(){
    const [count, setCount] = useState(0);

    const handlePlusClick = () => {
        if (count < 5){
            setCount(count+1)
        }
    }

    const handleMinusClick = () => {
        if (count > 0){
            setCount(count-1)
        }
    }
    return(
        <div>
            <button onClick={handleMinusClick}>[-]</button>
            <span>
                {count}
                {[...Array(count)].map((heart, i)=>{
                    return (
                        <span key="i">
                             <Heart/>
                        </span>
                    )
                })}
            </span>
            <button onClick={handlePlusClick}>[+]</button>
        </div>

    )
}