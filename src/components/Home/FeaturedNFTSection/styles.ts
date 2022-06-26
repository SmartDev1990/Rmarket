import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export const LinkBar = styled('div')(({ theme }) => {
    return ({
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 1,
        width: '100%',
        maxWidth: 'min(1400px, 100% - 40px)',
        marginTop: 20,
        '& .link-out': {
            marginLeft: 5,
            position: 'relative',
            WebkitClipPath: 'polygon( 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0% 25% )',
            clipPath: 'polygon( 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0% 25% )',
            transition: 'all 1s',
            background: `${theme.palette.divider}`,
            '& .border': {
                display: 'none',
                position: 'absolute',
                background: 'red',
                width: '100%',
                height: '100%',
                animation: 'o-rotate-360 linear 8s infinite',
                '& span': {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transform: 'translate(-50%, -50%)',
                    '&:after': {
                        display: 'block',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: '100%',
                    },
                    '&:first-of-type': {
                        background: '#d900c0',
                        '&:after': {
                            background: '#40ffce'
                        }
                    },
                    '&:last-of-type': {
                        background: '#ff5f2d',
                        '&:after': {
                            background: '#9058ff'
                        }
                    }
                },
                '@keyframes o-rotate-360': {
                    '0%': {
                        transform: 'rotate(0)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                }
            },
            '&:hover': {
                '& .border': {
                    transition: 'all 1s',
                    display: 'block',
                    background: 'transparent',
                }
            },
            '& .link-button': {
                WebkitClipPath: 'polygon( 50% 2px, calc(100% - 2px) calc(25% + 1px), calc(100% - 2px) calc(75% - 1px), 50% calc(100% - 2px), 2px calc(75% - 1px), 2px calc(25% + 1px) )',
                clipPath: 'polygon( 50% 2px, calc(100% - 2px) calc(25% + 1px), calc(100% - 2px) calc(75% - 1px), 50% calc(100% - 2px), 2px calc(75% - 1px), 2px calc(25% + 1px) )',
                display: 'inline-block',
                textTransform: 'uppercase',
                fontWeight: 700,
                fontSize: 14,
                background: `${theme.palette.background.default}`,
                padding: '10px 7px',
                transition: 'all 0.3s',
                position: 'relative',
                '& .link-image': {
                    width: 50,
                    height: 50,
                    position: 'relative'
                }
            }
        },
        '& .link-pannel': {
            position: 'relative',
            marginLeft: 5,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: `${theme.palette.background.default}`,
            width: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            transition: 'all 0.3s',
            boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 10px 0px',
            '& .border': {
                display: 'none',
                position: 'absolute',
                width: '100%',
                height: '500%',
                animation: 'o-rotate-360 linear 8s infinite',
                '& span': {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transform: 'translate(-50%, -50%)',
                    '&:after': {
                        display: 'block',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: '100%',
                    },
                    '&:first-of-type': {
                        background: '#d900c0',
                        '&:after': {
                            background: '#40ffce'
                        }
                    },
                    '&:last-of-type': {
                        background: '#ff5f2d',
                        '&:after': {
                            background: '#9058ff'
                        }
                    }
                },
                '@keyframes o-rotate-360': {
                    '0%': {
                        transform: 'rotate(0)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                }
            },
            '& a': {
                width: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${theme.palette.background.default}`,
                zIndex: 1,
                '&:hover': {
                    color: '#ff6050'
                }
            },
            '&.active': {
                width: 250,
                padding: 2,
                transition: 'all 0.3s',
                '& a': {
                    width: '100%',
                    height: '100%',
                    textAlign: 'left'
                }
            },
            '&:hover': {
                '& .border': {
                    transition: 'all 1s',
                    display: 'block',
                    background: 'transparent',
                }
            },
        }
    })
})

export const Section = styled('div')(({ theme }) => {

    const sm = useMediaQuery('(max-width:600px)');
    const md = useMediaQuery('(max-width:900px)');
    const lg = useMediaQuery('(max-width:1200px)');

    return ({
        display: 'flex',
        height: 800,
        ...((sm || md) && {
            height: '100%',
        }),
        '& .featured-background-container': {
            // backgroundImage: "url(/assets/template/1.jpg)",
            backgroundSize: 'cover',
            padding: '20px 0px 44px 0px',
            backgroundPosition: 'center',
            width: '100%',
            position: 'absolute',
            overflow: 'hidden',
            '& .coverImg': {
                height: 600,
                ...((sm || md) && {
                    height: 780
                }),
                backgroundImage: "url(/assets/template/1.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '150px 20px 44px 30px',
                // background: 'black',
                // opacity: 0.5,
                filter: 'blur(8px)',
                // mask: 'linear-gradient(rgb(255 255 255 / 50%), transparent)',
                '& img': {
                    width: '100%',
                    height: '100%'
                }
            },
        },
        '& .featured-container': {
            display: 'flex',
            justifyContent: 'center',
            margin: '0px auto',
            width: '100%',
            maxWidth: 'min(1400px, 100% - 40px)',
            flexWrap: 'wrap',
            '& .featured-title': {
                flexDirection: 'column',
                padding: '80px 15px 44px 15px',
                alignItems: 'flex-start',
                display: 'flex',
                width: '50%',
                lineHeight: 2,
                ...((sm || md) && {
                    alignItems: 'center',
                    width: '100%'
                }),
                '& .featured-header': {
                    margin: 0,
                    fontSize: '50px',
                    fontFamily: 'poppin-light',
                    color: 'inear-gradient(90deg, rgba(246,73,73,1) 0%, rgba(245,255,75,1) 49%, rgba(215,76,194,1) 100%)',
                    fontWeight: 600,
                    textAlign: 'left',
                    lineHeight: 1.2,
                    animation: 'rainbow-text-simple-animation-rev 1s ease forwards',
                    ...((sm || md) && {
                        fontSize: 30,
                        maxWidth: 600,
                        textAlign: 'center',
                    }),
                    zIndex: 2,
                },
                '& .featured-subheader': {
                    marginTop: 20,
                    fontFamily: 'poppin-light',
                    fontSize: 24,
                    lineHeight: 1.2,
                    textAlign: 'left',
                    ...((sm || md) && {
                        textAlign: 'center',
                        maxWidth: 400,
                        fontSize: 18
                    }),
                    zIndex: 2,
                },
                '& .featured-button-container': {
                    marginTop: 40,
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...((sm || md) && {
                        marginTop: 20,
                        textAlign: 'center',
                    }),
                    '& div': {
                        '& .createBtn': {
                          marginTop: 10,
                          marginRight: 10,
                          width: 200,
                          ...((sm || md) && {
                              width: 140,
                          }),
                          display: 'inline-block',
                          borderRadius: '10px',
                          fontWeight: 700,
                          fontSize: 18,
                          color: '#fff',
                          backgroundColor: '#5c4bff',
                          lineHeight: 1,
                          padding: '14px',
                          transition: 'all 0.3s',
                          position: 'relative',
                          textTransform: 'capitalize'
                        },
                        '& .exploreBtn': {
                            marginTop: 10,
                            marginRight: 10,
                            width: 200,
                            ...((sm || md) && {
                                width: 140,
                            }),
                            display: 'inline-block',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            border: '5px',
                            borderColor: 'pink',
                            fontWeight: 700,
                            fontSize: 18,
                            color: '#fff',
                            backgroundColor: '#4cd7c6',
                            lineHeight: 1,
                            padding: '14px',
                            transition: 'all 0.3s',
                            position: 'relative',
                            textTransform: 'capitalize'
                        },
                        '& .mintBtn': {
                            marginTop: 10,
                            marginRight: 10,
                            width: 200,
                            ...((sm || md) && {
                                width: 140,
                            }),
                            display: 'inline-block',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            border: '5px',
                            borderColor: 'pink',
                            fontWeight: 700,
                            fontSize: 18,
                            color: '#fff',
                            backgroundColor: 'blue',
                            lineHeight: 1,
                            padding: '14px',
                            transition: 'all 0.3s',
                            position: 'relative',
                            textTransform: 'capitalize'
                        },
                    },
                },
                '& .about-magics': {
                    display: 'flex',
                    height: '100%',
                    alignItems: 'flex-end',
                    marginTop: 40,
                    marginBottom: 10,
                    ...((sm || md) && {
                        width: '100%',
                        justifyContent: 'center'
                    })
                }
            },
            '& .featured-image': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                padding: '90px 20px 40px 20px',
                width: '50%',
                ...((sm || md) && {
                    width: '100%',
                    paddingTop: 0,
                    alignItems: 'center',
                }),
                '& .featured-image-card': {
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    borderRadius: 15,
                    zIndex: 2,
                    maxWidth: '550px',
                    boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 10px 0px',
                    ...((sm || md) && {
                        maxWidth: '355px',
                    }),
                    '&:hover': {
                        transition: 'box-shadow 0.3s ease-in 0s',
                        boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 50px 0px'
                    },
                    '& .featured-image-card-link': {
                        borderRadius: 15,
                        color: 'rgb(32, 129, 226)',
                        textDecoration: 'none',
                        '& .featured-image-card-link-meida': {
                            height: 420,
                            zIndex: 2,
                            borderBottom: '1px solid background.default',
                            minHeight: 'inherit',
                            borderRadius: 'inherit',
                            ...((sm || md) && {
                                height: 300,
                            }),
                            '& .media-img': {
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                display: 'flex',
                                height: '100%',
                                minHeight: 'inherit',
                                width: '100%',
                                position: 'relative',
                                borderRadius: 'inherit',
                                '& .asset-media-image': {
                                    height: 550,
                                    width: 550,
                                    borderRadius: 'inherit',
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    color: `${theme.palette.text.primary}`,
                                    backgroundColor: `${theme.palette.background.default}`,
                                    '& img': {
                                        objectFit: 'fill',
                                        width: '100%',
                                        height: '100%',
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        borderTopLeftRadius: 'inherit',
                                        borderTopRightRadius: 'inherit',
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }
                                }
                            }
                        }
                    },
                    '& .featured-image-text-area': {
                        display: 'flex',
                        borderRadius: '0px 0px 15px 15px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        fontWeight: 600,
                        padding: 16,
                        border: '1px solid rgb(229, 232, 235)',
                        color: `${theme.palette.text.primary}`,
                        backgroundColor: `${theme.palette.background.default}`,
                        textAlign: 'left',
                        '& .logo': {
                            marginRight: 5,
                            borderRadius: '50%',
                            padding: 0,
                            position: 'relative',
                            border: `1px solid white`,
                            boxShadow: 'rgb(26 26 26) 0px 0px 3px 0px',
                            '& span': {
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                            },
                            '& img': {
                                position: 'absolute',
                                top: 0,
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                            }
                        },
                        '& .content': {
                            flex: '1 1 auto',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            marginRight: 16,
                            fontSize: 14,
                            alignItems: 'flex-start',
                        },
                        '& .info': {

                        }
                    }
                }
            },
        }
    })
});
