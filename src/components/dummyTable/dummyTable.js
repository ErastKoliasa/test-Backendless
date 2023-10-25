import './dummyTable.css'
import persons from '../../data/persons.json'
import { useState } from 'react';

const DummyTable = () => {
    const [sortType, setSortType] = useState('name');

    const filteredPerson = persons.filter((person) =>
        person.name.toLowerCase() || person.gender.toLowerCase());

    filteredPerson.sort((a, b) => {
        if (a[sortType] < b[sortType]) return -1;
        if (a[sortType] > b[sortType]) return 1;
        return 0;
    });

    return (
        <div>
            <h1 className='title'>Dummy Table</h1>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => setSortType('name')}>Person</th>
                        <th onClick={() => setSortType('gender')}>Gender</th>
                        <th onClick={() => setSortType('age')}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPerson.map(person => {
                        return (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.gender}</td>
                                <td>{person.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default DummyTable;