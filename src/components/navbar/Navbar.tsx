import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }
    
    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>
                    <div className="container flex justify-between text-lg">
                    {/* Adicionando a logo */}
                        <div className="container flex items-center gap-2">
                            <img src={logo} alt="Logo" className="h-10" />
                            <Link to='/home' className="text-2xl font-bold">Nathan Ribeiro</Link>
                        </div>

                        <div className='flex items-center gap-6'>
                            <Link to='/postagens' className='hover:underline'>Postagens</Link>
                            <Link to='/temas' className='hover:underline'>Temas</Link>
                            <Link to='/cadastrartema' className='hover:underline whitespace-nowrap'>Cadastrar tema</Link>
                            <Link to='/perfil' className='hover:underline'>Perfil</Link>
                            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                        </div>
                    </div>    

            </div>

        )

    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar









