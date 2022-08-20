import React from 'react'
import Allcard from './Allcard'

const All = ({data}) => {
  return (
    <div className='p-3 md:p-10'>
        {data.map((item, index) => <Allcard key={index} item={item} />)}
    </div>
  )
}

export default All