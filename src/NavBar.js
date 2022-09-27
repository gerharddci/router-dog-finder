import { NavLink } from 'react-router-dom';
import { getDogs } from './data';

export default function NavBar() {
    const dogs = getDogs();

    return (
        <nav style={{
            padding: "1rem",
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-around"
        }}>
            {dogs.map(dog => (
                <NavLink
                    style={{ margin: "1rem", textAlign: "center" }}
                    to={`/dogs/${dog.name}`}
                    key={dog.name}
                    >
                        <img style={{ width: "150px", borderRadius: "50%", border: "1em solid" }}src={dog.image} alt=""/>
                        <p>{dog.name}</p>
                </NavLink>
            ))}
        </nav>
    )
}