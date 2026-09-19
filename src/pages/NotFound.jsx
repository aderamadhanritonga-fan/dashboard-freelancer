import { Link } from "react-router-dom"

function NotFound(){

        return (
            <section>
                <h1>Proyek tidak ditemukan</h1>
                <Link to="/projects">Kembali ke proyek</Link>
            </section>
        )

}

export default NotFound