import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import homeImage from "../../assets/home.png";

function Home() {

    return (
        <>
            <div className="bg-blue-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">                         
                            <ModalPostagem />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img
                        src={homeImage}
                        alt="Imagem Página Home"
                        className='w-2/3'
                    />
                </div>
            </div>
            
            {/* Container que ocupa toda a largura da tela */}
            <div className="relative w-full h-[500px] flex justify-center items-center">
                {/* Imagem de fundo cobrindo toda a área */}
                <img
                    src="https://static.vecteezy.com/ti/vetor-gratis/p1/3809954-digital-binario-codigo-dados-fundo-computador-numeros-conceito-tecnologico-vetor.jpg"
                    alt="Imagem Fundo"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                    {/* ListaPostagens sobrepondo a imagem */}
                <div className="relative z-10">
                    <ListaPostagens />
                </div>
            </div>        
        </>
    )
}

export default Home

// https://i.imgur.com/fyfri1v.png