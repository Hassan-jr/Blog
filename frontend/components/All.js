import React from 'react'
import Allcard from './Allcard'

const All = ({data}) => {
  return (
    <div>
        {data.map((item, index) => <Allcard key={index} item={item} />)}
    </div>
  )
}

export default All