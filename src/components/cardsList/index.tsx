import React from 'react';
import './style.scss';
import Card from '../cards'

const schedulingList: React.FC = () => {
    return(
        <div className='container-scheduling-list'>
            <div className="list-container">
                <h2>CONSULTAS AGENDADAS</h2>
                <div className="cards-container">
                    <Card/>
                    <Card/>
                                                                         
                </div>
            </div>
              
        </div>
    )
}

export default schedulingList;