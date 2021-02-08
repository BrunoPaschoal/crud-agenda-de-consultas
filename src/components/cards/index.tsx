import React from 'react';
import './style.scss'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const Card: React.FC = () => {
    return(
        <div className='container-card'>            
            <div className="card-header">
                <div className="info-header-container">
                    <h3>Nome:</h3>
                    <span>Dr. Leandro Casablanca</span>
                </div>

                <div className="info-header-container">
                    <h3>Especialidade</h3>
                    <span>Pediatra</span>                        
                </div>

                <div className="info-header-container">
                    <h3>Início:</h3>
                    <span>11:00h</span>                        
                </div>
                <div className="info-header-container">
                    <h3>Fim:</h3>
                    <span>12:00h</span>                        
                </div>

            </div>

            <div className="card-description">
                <h3>Descrição:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum harum dignissimos at omnis libero eum nulla numquam provident ratione maxime accusamus, vero odit asperiores eaque explicabo? Earum, animi nisi.</p>
            </div>

            <div className="buttons-container">
                <DeleteForeverIcon color='secondary' cursor='pointer'/>
                <EditIcon color='primary' cursor='pointer'/>
            </div>
        </div>
    )
}

export default Card;