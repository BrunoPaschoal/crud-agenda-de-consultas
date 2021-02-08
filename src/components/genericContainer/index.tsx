import React from 'react';
import './style.scss'

interface IGenericContainerProps {
    title: string;
    body: any;
}

const GenericContainer: React.FC<IGenericContainerProps> = (title, body) => {
    return(        
        <div className="form-container">
            <h2>{title}</h2>
            {body}
        </div>       
    )
}

export default GenericContainer;