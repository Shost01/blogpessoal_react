import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between text-white bg-[url(https://media.istockphoto.com/id/855117588/pt/foto/blue-low-poly-background.jpg?s=612x612&w=0&k=20&c=vwvvwhdzvBtWRxMQ-0ng7EiMUfzX0uKx9ShQio0Qp74=)]'>
                
            <div>
                <div className="flex w-full bg-indigo-800 py-2 px-4 items-center gap-4">
                    <img src={postagem.usuario?.foto} className='h-12 rounded-full' alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'> {postagem.usuario?.nome}</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-slate-100 bg-indigo-700 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-red-600 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem