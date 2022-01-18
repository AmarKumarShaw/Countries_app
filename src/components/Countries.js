import { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.css";

const Countries = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [datas, setDatas] = useState([]);
    const [sort,setSort] =  useState("sort")


    const getData = async () => {
        const res = await axios.get(
            `https://restcountries.com/v3.1/all`
        );

        const data = res.data
        console.log(data)
        setDatas(data)


    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h1>This is Countries Page</h1>
            <input type="text" onChange={(e) =>setSearchTerm(e.target.value)} />
            <table>
                <th>Flag</th>
                <th>Countries</th>
                <th>Number of Inhabitants</th>
                

            {
                datas.filter((data)=>{
                    if(searchTerm== ""){
                        return data;
                    }
                    else if(data.name.common.toLowerCase().includes(searchTerm.toLowerCase()) || data.name.common.toLowerCase().includes(searchTerm.toLowerCase())){
                        return data;
                    }
                }).map((data, idx) => {

                    return (
                        <tr key={idx}>
                            <td><img className="data-img" src={data.flags.svg} alt="" /></td>      
                            <td>{data.name.common}</td>
                            <td>{data.population}</td>
                        </tr>
                        


                    )
                })
            }
            
           

            </table>
        </div>
    )
}

export default Countries
