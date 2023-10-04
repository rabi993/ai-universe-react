import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data , setData] = useState([]);


    useEffect( ()=>{
        const loadData = async() =>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            // console.log(value.data.tools)
            setData(value.data.tools);
        }
        loadData()
    },[])

    return (
        <>
            {
                data.map((singleData)=> {
                    // console.log(singleData)
                    return <SingleData singleData={singleData}> </SingleData>
                })
            }
        </>
    );
};

export default Card;