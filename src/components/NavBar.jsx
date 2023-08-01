import { Link } from "react-router-dom";

export default function NavBar () {

    return (
        <>
        <NavBar style={{
            display: "flex",
            gap: "8px",
        }}>
    
        <Link to="/">To Home</Link>
        </NavBar>
        </>
    );
}