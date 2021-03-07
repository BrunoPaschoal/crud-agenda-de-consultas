import React, {useEffect, useState} from 'react';
import './style.scss';
import Card from '../cards'
import moment from 'moment'
//API
import Api from '../../services/axios'

interface IAppointentData{
    nome: string,
    especialidade: string,
    descricao: string,
    inicioConsulta: Date,
    fimConsulta: Date,
    id: number,
}

//Função para formatar data
function formateDate (date: Date){
    return moment(date).format("DD/MM/YYYY")
}

//COMPONENTE
const CardList: React.FC = () => {

    const [appointentData, setAppointentData] = useState<IAppointentData[]>([])

    useEffect(() =>{
        loadAppointmentData()
    },[])

    //Requisição provisória de teste
    async function loadAppointmentData() {
        const response = await Api.get('/Consultas')
        console.log(response);
        setAppointentData(response.data)   
    }

    return(
        <div className='container-scheduling-list'>
            <div className="list-container">
                <h2>CONSULTAS AGENDADAS</h2>
                <div className="cards-container">
                    {
                        appointentData.map(data =>{
                            return (
                                <Card
                                key={data.id}
                                name={data.nome}
                                specialty={data.especialidade}
                                begin={formateDate(data.inicioConsulta)}
                                end={formateDate(data.fimConsulta) }
                                description={data.descricao}
                        />
                            )
                        })
                    }                                                                                                             
                </div>
            </div>
              
        </div>
    )
}

export default CardList;