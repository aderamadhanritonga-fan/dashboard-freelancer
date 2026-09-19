import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import NotFound from "../NotFound";
import { useNavigate } from "react-router-dom";

function ProjectDetail(){
    const { id }= useParams()
    const navigate = useNavigate()

    const project = projects.find(
        (item) => item.id === Number(id)
    )

    if(!project){
        return <NotFound />
    }



    return (
        <section key={project.id}>
            {/* <Link to="/projects">Kembali ke proyek</Link> */}
            <button type="button" onClick={() => navigate(-1)}>Kembali</button>

            <h1>{project.judul}</h1>
            <p>{project.deskripsi}</p>
            <p>Kategori : {project.kategori}</p>
            <p>Status : {project.status}</p>
        </section>
    )
}

export default ProjectDetail