"use client"

import * as React from 'react';
import { Button as BaseButton, ButtonProps, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import {CircularProgress} from "@mui/material";
const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const green = {
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#43A047',
    600: '#388E3C',
    700: '#2E7D32',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

type CustomButtonProps = ButtonProps & {
    children: React.ReactNode;
    color?: 'blue' | 'green';
    loading?: boolean;
    sx?: React.CSSProperties;
};

const StyledButton = styled(BaseButton, {
    shouldForwardProp: (prop) => prop !== 'color'
})<CustomButtonProps>(
    ({ theme, color = 'blue' }) => {
        const palette = color === 'green' ? green : blue;
        return `
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 1.5;
            background-color: ${palette[500]};
            padding: 8px 16px;
            border-radius: 8px;
            color: white;
            transition: all 150ms ease;
            cursor: pointer;
            border: 1px solid ${palette[500]};
            box-shadow: 0 2px 1px ${
            theme.palette?.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
        }, inset 0 1.5px 1px ${palette[400]}, inset 0 -2px 1px ${palette[600]};

            &:hover {
              background-color: ${palette[600]};
            }

            &.${buttonClasses.active} {
              background-color: ${palette[700]};
              box-shadow: none;
              transform: scale(0.99);
            }

            &.${buttonClasses.focusVisible} {
              box-shadow: 0 0 0 4px ${theme.palette?.mode === 'dark' ? palette[300] : palette[200]};
              outline: none;
            }

            &.${buttonClasses.disabled} {
              background-color: ${theme.palette?.mode === 'dark' ? grey[700] : grey[200]};
              color: ${theme.palette?.mode === 'dark' ? grey[200] : grey[700]};
              border: 0;
              cursor: default;
              box-shadow: none;
              transform: scale(1);
            }
        `;
    }
);

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { color = 'blue', loading = false, children, disabled, sx, ...rest } = props;
    return (
        <StyledButton
            style={sx}
            color={color}
            {...rest}
            disabled={loading || disabled}
        >
            {loading ? <CircularProgress size={15} color="inherit"/> : children}
        </StyledButton>
    );
};

export default CustomButton;