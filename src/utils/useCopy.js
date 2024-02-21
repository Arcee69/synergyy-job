import t from "prop-types";
import { useSnackbar } from 'notistack';

export const useCopy = () => {
    const { enqueueSnackbar } = useSnackbar();

    const copyToClipBoard = (text) => {
        try {
            navigator?.clipboard?.writeText(text);
            enqueueSnackbar('Link copied!', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                style: { 
                    fontSize: 16, 
                    backgroundColor: '#3DD368'
                },
            });
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Couldn't copy link!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                style: { 
                    fontSize: 16, 
                    backgroundColor: '#F56A6A'
                },
            });
        }
    };

    return {
        copyToClipBoard,
    };
};

useCopy.PropTypes = {
    text: t.string,
};