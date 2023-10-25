import Chart from "react-google-charts";
import './dummyChart.css'
import persons from '../../data/persons.json'
import { useEffect, useState } from "react";

const DummyChart = () => {
    const [male, setMale] = useState(0);
    const [female, setFemale] = useState(0);

    useEffect(() => {
        const maleCount = persons.filter(person => person.gender === "Male").length;
        const femaleCount = persons.filter(person => person.gender === "Female").length;
        setMale(maleCount);
        setFemale(femaleCount)
    },[])

    return (
        <div className="containerChart">
            <h1 className="title">Dummy Chart</h1>
            <Chart
                chartType="PieChart"
                data={[["Gender", "Count"], ["Male", male], ["Female", female]]}
                width="75%"
                height="400px"
                options={{ title: "Gender:" }} />
        </div>
    )
}
export default DummyChart;