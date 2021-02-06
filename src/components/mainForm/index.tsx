import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
                    <Button variant="contained" color="secondary">Cancelar</Button>
                    <Button variant="contained" color="primary">Salvar</Button>
                </div>
            </div>    
        </div>
    )
}

export default MainForm;