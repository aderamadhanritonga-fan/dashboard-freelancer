import useFetch from "../hooks/useFetch";

function User(){
    const {
        data: users,
        loading, 
        error,
        retry
    } = useFetch('https://jsonplaceholder.typicode.com/users')

    if(loading){
        return <p>Memuat Data....</p>
    }

    if(error){
        return(
            <section>
                <p>{error}</p>
                <button onClick={retry}>Coba Lagi</button>
            </section>
        )
    }

    return(
        <section>
            <h2>Daftar User</h2>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default User