import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

interface IButton {
    text: string
    type?: string
    fullWidth?: any
    variant?: string
}

export const PublicButton: React.FC<IButton> = (props) => {

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            {props.text}
        </Button>
    )
}
export const PublicLoadingButton: React.FC = () => {

    return (
        <LoadingButton
            loading={true}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Loading
        </LoadingButton>
    )
}