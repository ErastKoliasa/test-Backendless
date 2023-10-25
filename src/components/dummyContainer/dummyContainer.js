import Tabs from '../../data/tabs.json'
import { Link } from "react-router-dom";
import './dummyContainer.css'

const DummyContainer = () => {       
    return (
        <div className='container'>
            {Tabs.map(tab => {
                return(
                    <Link to={tab.id} key={tab.id} className='item'>{tab.title}</Link>
                )
            })}
        </div>
    )
}
export default DummyContainer;