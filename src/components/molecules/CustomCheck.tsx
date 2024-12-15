import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Color } from '@/styles/colors';

type TProps = {
  text: string;
  required?: boolean;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheck = ({
  text,
  required = false,
  checked,
  onChange,
}: TProps) => {
  return(
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            color: Color.Primary,
            '&.Mui-checked': {
              color: Color.Primary,
            },
          }}
        />
      }
      required={required}
      label={text}
    />
  )
}
