import React from 'react';
import './style.scss';
import {withStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button';

interface ICustomButtonProps {
    title: string;
    color: string;
    colorHover: string;
}

const GenericButton: React.FC<ICustomButtonProps> = ({title, color, colorHover}) => {
     const StyledButton = withStyles({
         root: {
            backgroundColor: color,
            borderRadius: '20px',
            color: '#fff',
            width: '150px',
            padding: '5px 0 5px 0',
            "&:hover": {
                backgroundColor: colorHover
            }      
         }
     })(Button);
    return(
        <StyledButton>{title}</StyledButton>
    )
}

export default GenericButton;