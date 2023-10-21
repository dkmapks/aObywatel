import TextField from '@mui/material/TextField';

function BaseInput(props: {
    size?: 'small' | 'medium'
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    multiline?: boolean
} & Record<string, any>) {
    return <TextField {...props} value={props.value} onInput={props.onInput} variant="outlined" size={props.size}  />;
}

export default BaseInput;