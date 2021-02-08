import React from 'react';
import './style.scss';
import CardList from '../../components/cardsList'

const schedulingList: React.FC = () => {
    return(
        <div className='container-scheduling-list'>
            <CardList/>              
        </div>
    )
}

export default schedulingList;