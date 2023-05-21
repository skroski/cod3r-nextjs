// https://unicode-table.com/en/1F44B/
import { useContext } from "react"

export default function BoasVindas() {

    function renderizarNome() {
        return (
            <span className="hidden sm:inline">
                Teste auth
            </span>
        )
    }

    return (
        <div className={`text-3xl font-black`}>
            Olá {renderizarNome()} 👋
        </div>
    )
}
