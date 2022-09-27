import { useParams } from 'react-router-dom';
import { getDog } from '../data';


export default function Dog() {
    const params = useParams();
    const { name, age, facts } = getDog(params.name);

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <ul>
                {facts.map((fact, i) => <li key={i}>{fact}</li>)}
            </ul>
        </div>

    )
}