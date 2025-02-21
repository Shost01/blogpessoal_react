import { Bounce, toast } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {
            
        case 'Sucesso':
            toast.success(mensagem, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            break;

        case 'Erro':
            toast.error(mensagem, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            break;

            case 'info':
            default:
            toast.info(mensagem, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            break;
    }
}