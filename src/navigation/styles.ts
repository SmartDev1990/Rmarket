import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Header = styled('div')((theme) => {

  const sm = useMediaQuery('(max-width:600px)');
  const md = useMediaQuery('(max-width:900px)');
  const lg = useMediaQuery('(max-width:1200px)');
  return ({
    flexGrow: '1',
    transition: 'all 1s',
    '& .sticky': {
      boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 8px 0px',
      backgroundImage: 'none',
      paddingRight: 20,
      paddingLeft: 20,
      ...((lg) && {
        paddingRight: 30,
        paddingLeft: 30,
      }),
      ...((sm || md) && {
        padding: 0,
      }),
      '& .toolbar': {
        display: 'flex',
        height: 80,
        '& .magics-logo': {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          marginRight: 30,
          '& img': {
            marginRight: '1rem',
            width: 40,
            height: 50,
            minWidth: 70
          },
          '& .logo-title': {
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            backgroundImage: 'black',
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            WebkitBackgroundClip: 'text',
            height: '100%',
            ...(sm && {
              display: 'none'
            })
          }
        },
        '& .menu-search': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          ...(md && {
            display: 'none'
          }),
        },
        '& .menu-group': {
          display: 'flex',
          height: '100%',
          ...(md && {
            display: 'none'
          }),
          '& .menu-button-group': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          '& .createNFT-button': {
            display: 'flex',
            marginRight: '1rem',
            width: 120,
            justifyContent: 'center',
            alignItems: 'center'
          }
        },
        '& .dropMenuIcon': {
          cursor: 'pointer',
          display: 'none',
          marginRight: '1rem',
          alignItems: 'center',
          width: 25,
          ...((sm || md) && {
            display: 'block'
          })
        },
        '& .themeIcon': {
          cursor: 'pointer',
          display: 'flex',
          marginRight: '1rem',
          alignItems: 'center',
          width: 25,
        },
        '& .walletIcon': {
          cursor: 'pointer',
          display: 'flex',
          marginRight: '1rem',
          alignItems: 'center',
          width: 25,
        },
        '& .avatarIcon': {
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    '& .dropmenu-group': {
      display: 'none',
      height: '100%',
      width: '100%',
      transition: 'all 1s',
    },
    '@keyframes rainbow-text-simple-animation-rev': {
      '0%': {
        backgroundSize: '650%',
      },
      '40%': {
        backgroundSize: '650%',
      },
      '100%': {
        backgroundSize: '100%',
      }
    },
    '@keyframes rainbow-text-simple-animation': {
      '0%': {
        backgroundSize: '100%',
      },
      '80%': {
        backgroundSize: '650%',
      },
      '100%': {
        backgroundSize: '650%',
      }
    }
  })
});

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const CreateNFTModal = styled('div')((theme) => {

  const sm = useMediaQuery('(max-width:600px)');
  const md = useMediaQuery('(max-width:900px)');

  return ({
    // backgroundImage: 'linear-gradient(rgb(255 255 255 / 9%), rgb(137 137 137 / 99%))',
    '& .modal-title': {
      fontSize: '1.2rem',
      fontWeight: 600,
      textAlign: 'center'
    },
    '& .modal-body': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .select-item': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textDecoration: 'none',
        transition: 'all 0.3s',
        '& img': {
          transition: 'all 0.3s',
        },
        '&:hover img': {
          transform: 'scale(1.1)'
        },
        '& button': {
          marginTop: 30,
          width: 200,
          display: 'inline-block',
          fontWeight: 700,
          fontSize: 20,
          color: '#fff',
          lineHeight: 1,
          padding: '14px 26px',
          transition: 'all 0.3s',
          position: 'relative',
          background: '#5c49d0',
          ...((sm || md) && {
            width: 140,
            fontSize: 15,
          }),
          '&:hover': {
            background: '#cf3464',
          }
        },
        '&:hover button': {
          background: '#cf3464',
        },
      }
    },
    '& .modal-actions button': {
      display: 'none',
      ...((sm || md) && {
        display: 'block',
        position: 'fixed',
        bottom: 10
      })
    }
  })
})


export const DropdownMenu = styled('div')(({ theme, open, width, height }: { theme?: any, open: any, width?: any, height?: any }) => ({
  width: 100,
  ...(width && {
    width: width
  }),
  height: '100%',
  ...(height && {
    height: height
  }),
  padding: 10,
  ...(open && {
    zIndex: 10,
  }),
  '& .dropdownBtn': {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    fontWeight: 700,
    fontSize: 20,
  },
  '& .submenu': {
    position: 'absolute',
    zIndex: 9,
    width: 200,
    marginTop: 10,
    display: 'none',
    overflowY: 'auto',
    backgroundColor: `${theme.palette.background.default}`,
    // backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    transition: 'all 0.3s ease 0s',
    boxShadow: `0px 0px 10px 0px ${theme.palette.divider}`,
    ...(open && {
      transition: 'all 0.3s ease 0s',
      display: 'block',
      zIndex: 11
    }),
    '& ul': {
      margin: 0,
      padding: 0,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      '& li': {
        cursor: 'pointer',
        borderBottom: `1px solid ${theme.palette.divider}`,
        '& a': {
          padding: 15,
          display: 'flex',
          textDecoration: 'none',
          color: `${theme.palette.text.primary}`,
          '& .menu-image': {
            height: 24,
            width: 24,
            marginRight: 8,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            maxHeight: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 10,
          }
        },
        '&:hover a': {
          transition: 'all 0.3s ease 0s',
          boxShadow: `0px 0px 8px 6px ${theme.palette.divider}`,
        },
      },
      '& li:last-of-type': {
        border: 'none',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      },
    }
  }
}))
