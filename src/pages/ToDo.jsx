import useFetch from "../hooks/useFetch";

function ToDo(){
    const{
        data: todos,
        loading,
        error,
        retry
    } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

    if(loading){
        return <p>Memuat Tasks...</p>
    }
    if(error){
        return(
            <section>
                <p>{error}</p>
                <button onClick={retry}>Coba Lagi</button>
            </section>
        )
    }

    return (
        <section>
            <h2>Daftar Tasks</h2>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.tittle}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ToDo