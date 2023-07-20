import { useNavigate } from "react-router-dom";

const Second = () => {
    const navigate = useNavigate()

    return (
        <>
        <h3>Ini adalah Halaman About</h3>
        <button onClick={() => navigate('/')}>Home</button>
        </>
    )
}

export default Second;