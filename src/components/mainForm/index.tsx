import React from 'react';
import TextField from '@material-ui/core/TextField';
import StyledButton from '../genericButton/index';
import './style.scss'

const MainForm: React.FC = () => {
    return(
        <div className='container'>
            <div className="form-container">
                <h2>CADASTRO</h2>
                <div className='input-fields'>
                    <TextField
                        fullWidth
                        id="outlined-textarea"
                        variant="outlined"
                        label="Nome"
                        placeholder="Digite o nome do profissional de saúde"
                        multiline
                    />                    
                    <TextField
                        fullWidth
                        id="outlined-textarea"
                        variant="outlined"
                        label="Epecialidade"
                        placeholder="Digite a especialidade"
                        multiline
                    />
                    
                    <TextField                                        
                        fullWidth
                        id="outlined-multiline-static"
                        label="Descrição"                        
                        rows={4}
                        variant="outlined"
                        multiline
                    />
                </div>

                <div className='buttons-container'>                    
                    <StyledButton title='Cancelar' color='#ff4a4b' colorHover='#DD3435'/>
                    <StyledButton title='Salvar' color='#34c1b9' colorHover='#39A7A1'/>                         
                </div>
            </div>    
        </div>
    )
}

export default MainForm;