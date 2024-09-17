import {useState} from 'react' 
import StarIcon from '../StarIcon'
import Button from '../Button'
import {ReactComponent as BackIcon} from '@material-design-icons/svg/filled/arrow_back.svg'
import {ReactComponent as ForwardIcon} from '@material-design-icons/svg/filled/arrow_forward.svg'
import '../styles.css'


export default function UserRating() {
    const [count, setCount] = useState(0)

    const handlePlusClick = () => {
        if (count < 5) {
            setCount(count + 1)
            console.log("+1")
        }
    }

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count - 1)
            console.log("-1")
        }
        return
    }

    return (
        <div>
            <h3 className='list_title'>Rate This Recipe!</h3>
            <div className='rating_heart_layout'>
                {count > 0 ? (<Button visible onClick={handleMinusClick}><BackIcon /></Button>) : (<Button invisible><BackIcon /></Button>)}
                <span className='rating_heart_layout'>
                    {[...Array(count)].map((star, i) => {
                        return(
                            <span key="i">
                                <StarIcon visible />
                            </span>
                        )
                    })}
                    {[...Array(5-count)].map((star, i) => {
                        return(
                            <span key="i">
                                <StarIcon invisible />
                            </span>
                        )
                    })}
                    
                </span>
                {count < 5 ? (<Button visible onClick={handlePlusClick}><ForwardIcon /></Button>) : (<Button invisible><ForwardIcon /></Button>)}
            </div>
        </div>
    )
}