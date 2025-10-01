import React from 'react'

const UserComp = ({user}) => {
    if(user==='om'){
        throw new Error('Not a user');
    }
    return (
        <div>
            <p >User is : <strong>{user}</strong></p>
        </div>
    )
}

export default UserComp
