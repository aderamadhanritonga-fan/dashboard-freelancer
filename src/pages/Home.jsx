import { useState } from "react"

function FinalSummary({projects}){
    const total = projects.length
    const berjalan = projects.filter(p => p.status === 'Berjalan').length
    const selesai = projects.filter(p => p.status === 'Selesai').length
  
    return(
      <section>
        <div>Total Proyek : {total}</div>
        <div>Proyek Berjalan : {berjalan}</div>
        <div>Proyek Selesai : {selesai}</div>
        
      </section>
    )
  }
  
  function ProjectForm({form, errors, onChange, onSubmit}){
  return(
    <div>
      <h2>Capstone Freelance Dashboard</h2>
      <form  onSubmit={onSubmit}>
      <input type="text" name="judul" value={form.judul} onChange={onChange} placeholder='Input Judul'/>
      {errors.judul && <p style={{color: 'red'}}>{errors.judul}</p>}
  
      <input type="text" name='deskripsi' value={form.deskripsi} onChange={onChange} placeholder='Input Deskripsi' />
      {errors.deskripsi && <p style={{color: 'red'}}>{errors.deskripsi}</p>}
  
      <select name="kategori" value={form.kategori} onChange={onChange}>
        <option value="">Pilih Kategori</option>
        <option value="web">Web</option>
        <option value="ui/ux">UI/UX</option>
        <option value="cybersecurity">Cyber Security</option>
      </select>
      {errors.kategori && <p style={{color: 'red'}}>{errors.kategori}</p>}
  
      <input type="number" name="budget" value={form.budget} onChange={onChange} placeholder='Input Budget'/>
      {errors.budget && <p style={{color: 'red'}}>{errors.budget}</p>}
  
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
  }
  
  function FilterButtons({ filter, setFilter }) {
    return (
      <div>
        {['semua', 'berjalan', 'selesai'].map((f) => (
          <button key={f}
          style={{fontWeight : filter === f ? 'bold' : 'normal'}}
          onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    )
  }
  
  function ProjectList({projects, onStatus}){
  return (
    <div>
    {projects.map((project)=> (
      <ProjectCard 
      key={project.id}
      // seharusnya menerima array
      project={project}
      onStatus={onStatus}
      />
    )) }
    </div>
  )
  }
  function ProjectCard({project, onStatus}){
  return (
    <div>
      {/* lebih baik menerima 1 objek */}
        <h2>{project.judul}</h2>
        <p>{project.deskripsi}</p>
        <p>{project.kategori}</p>
        <p>{project.budget}</p>
        <p>{project.status}</p>
        <button onClick={() => onStatus(project.id)}>selesai</button>
    </div>
  )
  }



function Home(){

    const [projects, setProjects] = useState([
        //   {
        //   id: 1,
        //   judul : 'Belajar React',
        //   deskripsi : 'Pembelajaran React untuk menjadi FrontEnd Developer',
        //   kategori : 'Belajar',
        //   budget : 1000000,
        //   status: 'Berjalan',
        // },
        // {
        //   id: 2,
        //   judul : 'Belajar React',
        //   deskripsi : 'Pembelajaran React untuk menjadi FrontEnd Developer',
        //   kategori : 'Belajar',
        //   budget : 1000000,
        //   status: 'Berjalan',
        // },
      ])
      
        const [form, setForm] = useState({
          id: '',
          judul : '',
          deskripsi : '',
          kategori : '',
          budget : '',
          status: '',
        })
      
        const [errors, setErrors] = useState({})
      
        const [filter, setFilter] = useState('semua')
      
        const filteredProjects = projects.filter((project) => {
          if (filter === 'berjalan') return project.status === 'Berjalan'
          if (filter === 'selesai') return project.status === 'Selesai'
          return true
        })
      
        function handleChange(e){
          const {name, value} = e.target
          setForm({...form, [name] : value,})
        }
      
        function handleSubmit(e){
          e.preventDefault()
          setErrors(null)
      
          const errorBaru = {}
      
          if(form.judul.trim() === ''){
            errorBaru.judul = 'Isi Judul'
          }
          if(form.deskripsi === ''){
            errorBaru.deskripsi = 'Isi Deskripsi'
          }
          if(form.kategori === ''){
            errorBaru.kategori = 'Pilih Kategori'
          }
          if(form.budget === ''){
            errorBaru.budget = 'Isi Sesuai Kantong Anda'
          }
      
          setErrors(errorBaru)
      
          if(Object.keys(errorBaru).length > 0){
            return
          }
      
          const proyekBaru = {
            id: Date.now(),
            judul: form.judul,
            deskripsi: form.deskripsi,
            kategori: form.kategori,
            budget: form.budget,
            status : 'Berjalan'
          }
      
          setProjects([...projects, proyekBaru ])
      
          setForm({
            judul: '',
            kategori : '',
            budget: ''
          })
      
        }
      
      
        function handleStatus(id){
          setProjects(
            projects.map((p) => 
              p.id === id ? {...p, status : p.status === 'Berjalan' ? 'Selesai' : 'Berjalan'} : p
      
            ))
        }
      
        return (
      
          <>
          <main>
      
          <FinalSummary
          projects={projects}
          />
      
          <ProjectForm 
          form={form}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          />
          <FilterButtons
              filter={filter}
              setFilter={setFilter}
          />
      
          {filteredProjects.length === 0 ? 
          (<p> Belum Ada Proyek di "{filter.charAt(0).toUpperCase() + filter.slice(1)}"</p>) : 
          <ProjectList 
          projects={filteredProjects}
          onStatus={handleStatus} />
          }
          
      
          </main>
          </>
        )



}





export default Home