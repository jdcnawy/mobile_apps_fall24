import React from 'react'
import cx from 'classnames'
import './styles.css'

export default function Button(props) {
    const {
        children, 
        visible,
        invisible,
        ...otherProps
    } = props

    const classes = cx(otherProps.className, 'flex items-center px-2 py-0 rounded-lg', {
        'bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-800 fill-white': visible,
        'bg-transparent border-transparent fill-transparent': invisible
    })

    return <button {...otherProps} className={classes}>{children}</button>
}