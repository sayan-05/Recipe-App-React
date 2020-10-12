import React, { useState } from 'react';
import { useEffect } from 'react';
import Item from './Item'
import './App.css'

let appId = '971593d7'
let appKey = 'ad003f2fe5f0e63ef494639ef3e58a3f'

const App = () => {

    const [item, getItem] = useState('chicken')
    let [data, getData] = useState([])
    const [initialData, finalData] = useState('biryani')


    const getInput = (event) => {
        finalData(event.target.value)
    }

    const onSearch = () => {
        getItem(initialData)
        finalData('')

    }


    useEffect(() => {
        getRecipes()
    }, [item])


    let getRecipes = async () => {
        let url = "https://api.edamam.com/search?q=" + item + "&app_id=" + appId + "&app_key=" + appKey
        let response = await fetch(url)
        const jsonData = await response.json()
        getData(jsonData.hits)
        console.log(jsonData.hits)
    }
    return (
        <>
            <div className='all' >
                <div className="getInput" >
                    <input type="text" placeholder="Search your favourite food!" onChange={getInput} value={initialData} />
                    <button onClick={onSearch} > Search </button>
                </div>
                {
                    data.map((dataObject) => {
                        return <Item source={dataObject} />
                    })
                }
            </div>

        </>
    )




}


export default App; 