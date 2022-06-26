import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Section = styled('div')(({theme}) => {

    const sm = useMediaQuery('(max-width:600px)');
    const md = useMediaQuery('(max-width:900px)');

    return ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3% 10%',
        '& .section-header': {
            marginTop: 50,
            paddingBottom: 50,
            fontSize: 24,
            lineHeight: 1.2,
            fontWeight: 500,
            textAlign: 'center',
            fontFamily: 'poppin-light'
        },
        '& .section-body': {
            display: 'flex',
            marginTop: -30,
            alignItems: 'center',
            justifyContent: 'center',
            ...( ( sm || md ) && {
                flexWrap: 'wrap'
            }),
            '& .cell': {
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'justify',
                ...( ( sm || md ) && {
                    width: '100%',
                }),
                '& .cell-img': {
                    width: 50,
                    height: 50,
                    position: 'relative'
                },
                '& .cell-title': {
                    padding: 15,
                    textAlign: 'center',
                    fontFamily: 'poppin-light',
                    fontSize: '0.8rem',
                    fontWeight: 500
                },
                '& .cell-content': {
                    padding: 20,
                    fontFamily: 'poppin-light',
                    fontSize: '0.7rem',
                    textAlign: 'justify',
                }
            }
        }
    })
});
