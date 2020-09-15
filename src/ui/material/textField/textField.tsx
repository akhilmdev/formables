import React from 'react';
import TextField from '@material-ui/core/TextField';

import { TextFieldInterface } from './textField.interface';

export function MaterialTextField(props: TextFieldInterface) {
    return <TextField
                {...props}
            />
}