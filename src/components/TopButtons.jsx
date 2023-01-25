import React from 'react'

function TopButtons() {

    const cities = [
        {
            id: 1,
            title: 'london'
        },
        {
            id: 2,
            title: 'sydney'
        },
        {
            id: 3,
            title: 'tokyo'
        },
        {
            id: 4,
            title: 'toronto'
        },
        {
            id: 5,
            title: 'paris'
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium first-letter:capitalize'>{city.title}</button>
        ))}
    </div>

  )
}

export default TopButtons