import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json';

function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        // O valor dentro das chaves e tratado como um valor dinamico do JS
        // <> </> elemento fantasma, nao precisa colocar div para nao sujar o html
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h2">Boas vindas de volta!</Title>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
    // const username = 'ederbiason';
    const [username, setUsername] = React.useState('ederbiason');
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://w.wallhaven.cc/full/9m/wallhaven-9mxjjk.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: '#212931cc',
                    }}
                >
                    {/* Formulario */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log('Alguém submeteu o form');

                            // Fazendo o roteamento com React 
                            roteamento.push('/chat')
                            // Roteamento padrao do navegador
                            // window.location.href = '/chat'
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas a minha dimensão!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input 
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // atraves do React e avisa quem precisa
                                // A cada caracter vai atualizar a pagina, mas nao a pagina toda, apenas onde esta sendo alterado para nao ter que carregar tudo dnv
                                // React faz a comparação das mudanças e faz a mudança de uma vez so sem precisar carregar a pagina toda
                                setUsername(valor);
                            }}
                        /> */}
                        <TextField
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // atraves do React e avisa quem precisa
                                // A cada caracter vai atualizar a pagina, mas nao a pagina toda, apenas onde esta sendo alterado para nao ter que carregar tudo dnv
                                // React faz a comparação das mudanças e faz a mudança de uma vez so sem precisar carregar a pagina toda
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: '#83010D',
                                    backgroundColor: '#181f25cc',
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: "#83010D",
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: "#e25362",
                            }}
                        />
                    </Box>
                    {/* Formulário */}

                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: '#181f25cc',
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}