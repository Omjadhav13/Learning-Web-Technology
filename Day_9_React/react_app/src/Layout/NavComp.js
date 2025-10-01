import React from 'react'
import {Link} from 'react-router-dom';

const NavComp = () => {
    return (
        <div>
            <h1>Nav Comp</h1>
            <Link to='nav' className='btn btn-primary'>List</Link>{' '}
            <Link to='usestate' className='btn btn-primary'>useState</Link>{' '}
            <Link to='useeffect' className='btn btn-primary'>useEffect</Link>{' '}
            <Link to='product' className='btn btn-primary'>product</Link>{' '}
        </div>
    )
}

export default NavComp
