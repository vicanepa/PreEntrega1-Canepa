export default function ButtonComponent({texto}){

    function handleClick(){
        alert('ingresaste a la seccion ' + texto)
    }

    return(
        <>
    <button onClick={handleClick} className="btn btn-outline-secondary text-dark mx-2">{texto}</button>
        </>
    )
}