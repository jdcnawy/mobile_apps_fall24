import {ReactComponent as Star} from '@material-design-icons/svg/filled/star.svg'
import cx from 'classnames'
import React from 'react'
import './styles.css'

export default function StarIcon(props) {
    const {
        visible,
        invisible,
        ...otherProps
    } = props

    const classes = cx(otherProps.className, 'flex items-center', {
        'fill-yellow-300 stroke-yellow-500': visible,
        'fill-transparent stroke-yellow-500': invisible
    })

    return <Star {...otherProps} className={classes}/>
}