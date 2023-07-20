import { useNavigate } from "react-router-dom";
const First = () => {
    const navigate = useNavigate()

    return (
        <>
        <h3>Ini adalah Halaman Home</h3>
        <button onClick={() => navigate('/about')}>about</button>
        </>
    )
}

export default First;