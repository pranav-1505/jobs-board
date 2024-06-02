import React from 'react'
import '../../src/index.css'

const jobPosting = ({url, title, by, time}) => {
    const formattedTime = new Date(time*1000).toLocaleString()
  return (
    <div className='custom-post' role='listItem'>
    <h2 className='custom-post__title'>
       <a className={url ? "": "inactiveLink"}
       href={url}
       target='_blank'
       rel="noopner"
       >{title}</a>
    </h2>
    <span className="custom-post__metadata">by {by} . {formattedTime}</span>
    </div>
  )
}

export default jobPosting