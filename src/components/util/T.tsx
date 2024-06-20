import React from 'react'

type U = {
    name: string,
    age: number,
    likes?: any | any[],
}
const T = ({user}: {user: U}) => {

    return (
        <div>
            {user.age}
        </div>
    )
}

export default T