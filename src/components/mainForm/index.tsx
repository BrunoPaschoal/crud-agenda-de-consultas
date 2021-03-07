import React, {useState} from 'react';
import './style.scss';


//Material UI
import TextField from '@material-ui/core/TextField';
import StyledButton from '../genericButton/index';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers';

const MainForm: React.FC = () => {
    
    //State of the first input
    const [selectedDateBegin, setSelectedDateBegin] = useState<Date | null>(new Date('2014-08-18T21:11:54'),
      );    
        const handleDateBeginChange = (date: Date | null) => {
        setSelectedDateBegin(date);
      };

    //State of the second input
    const [selectedDateEnd, setSelectedDateEnd] = useState<Date | null>(new Date('2014-08-18T21:11:54'),
    );
        const handleDateEndChange = (date: Date | null) => {
        setSelectedDateEnd(date);
    };
    
    //Component
    return(
        <div className='container'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="form-container">
                    <h2>CADASTRO</h2>
                    <div className='input-fields'>
                        <TextField
                            fullWidth
                            id="outlined-textarea"
                            variant="outlined"
                            label="Nome"
                            placeholder="Digite o nome do profissional de saúde"
                        />
                                
                        <TextField
                            fullWidth
                            id="outlined-textarea"
                            variant="outlined"
                            label="Epecialidade"
                            placeholder="Digite a especialidade"
                        />

                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Início"
                            value={selectedDateBegin}
                            inputVariant="outlined"
                            onChange={handleDateBeginChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />

                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Fim"
                            value={selectedDateEnd}
                            onChange={handleDateEndChange}
                            inputVariant="outlined"
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
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
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default MainForm;