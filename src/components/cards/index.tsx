import React from 'react';
import './style.scss'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

interface ICardProps{
    name: string;
    specialty: string;
    begin: string;
    end: string;
    description: string;
}

const Card: React.FC<ICardProps> = ({name, specialty, begin, end, description}) => {
    return(
        <div className='container-card'>            
            <div className="card-header">
                <div className="info-header-container name">
                    <h3>Nome:</h3>
                    <span>Dr. {name}</span>
                </div>

                <div className="info-header-container specialty">
                    <h3>Especialidade:</h3>
                    <span>{specialty}</span>                        
                </div>

                <div className="info-header-container begin">
                    <h3>Início:</h3>
                    <span>{begin}</span>                        
                </div>
                <div className="info-header-container end">
                    <h3>Fim:</h3>
                    <span>{end}</span>                        
                </div>

            </div>

            <div className="card-description">
                <h3>Descrição:</h3>
                <p>{description}</p>
            </div>

            <div className="buttons-container">
                <DeleteForeverIcon color='secondary' cursor='pointer'/>
                <EditIcon color='primary' cursor='pointer'/>
            </div>
        </div>
    )
}

export default Card;