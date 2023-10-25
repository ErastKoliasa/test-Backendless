import './dummyList.css'
import persons from '../../data/persons.json'

const DummyList = () => {
    return (
        <div className='containerList'>
            <h1 className='title'>Dummy List</h1>
            <ol>
                {persons.map(person => {
                    return(
                        <li key={person.id}>{person.name}
                    <ul>
                        <li>{person.age}</li>
                        <li>{person.gender}</li>
                    </ul>
                </li>
                    )
                })}
            </ol>
        </div>
    )
}
export default DummyList;