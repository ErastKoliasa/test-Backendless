import Tabs from '../data/tabs.json'
import { Link } from "react-router-dom";

const DummyContainer = () => {       
    return (
        <div>
            {Tabs.map(tab => {
                return(
                    <Link to={tab.id} key={tab.id} style={{margin: "10px"}}>{tab.title}</Link>
                )
            })}
        </div>
    )
}
export default DummyContainer;