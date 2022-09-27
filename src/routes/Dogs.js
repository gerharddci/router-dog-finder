import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';


export default function Dogs() {
    return (
        <div >
            <h1>HELLO! WE HAVE DOGS. CLICK ON THEM FOR MORE INFO</h1>
            <NavBar />
            <Outlet />
        </div>
    )
}