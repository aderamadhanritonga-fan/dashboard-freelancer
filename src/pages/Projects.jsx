import { Link } from "react-router-dom"
import { projects } from "../data/projects"

function Projects(){
    return (
        <section>
            <h1>Semua Proyek</h1>

            {projects.map((project) => (
                <article key={project.id}>
                    <h2>{project.judul}</h2>
                    <p>{project.kategori}</p>
                    <p>Status : {project.status}</p>

                    <Link to={`/projects/${project.id}`}> 
                    Lihat Detail
                    </Link>
                </article>
            ))}
        </section>
    )
}

export default Projects