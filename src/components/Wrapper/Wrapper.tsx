import React from 'react';
import './Wrapper.css';

interface WrapperProps {
    children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className='wrapper-container'>
        {children}
    </div>
  )
}

export default Wrapper;