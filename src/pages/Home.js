import { useState, useEffect } from "react"
// import { AppContext } from "../App"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Loading from '../assets/loading.gif';
// import { ChangeProfile } from '../components';
import '../App.css';

export const Home = () => {

    const [imgURL, setImgURL] = useState('');
    // const { username } = useContext(AppContext);
    const {data: catData, isLoading, isError, refetch} = useQuery(["fact"], async () => {
        const res = await axios.get('https://catfact.ninja/fact');
        return res.data;
    });

    const getRandomImage = async () => {
        try {
            const response = await axios.get("https://cataas.com/cat?json=true");
            const catId = response.data.url;
            console.log(catId);
            setImgURL(`https://cataas.com/${catId}`);
        } catch (error) {
            console.log("Error fetching image: ", error);
        }
    };
  
    useEffect(() => {
        getRandomImage();
    }, []);

    if (isError) {
        return <h2> Sorry, there was an Error! </h2>
    }
    if (isLoading) {
        return <p><img src={Loading} alt='loading gif' /></p>
    }

    return (
        <main className="flex justify-center items-center m-8">
            {/* <h2 className="text-xl">Current user: {username}</h2>
            <div className="p-6">
                <ChangeProfile />
            </div> */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-white">CatFact</h5>
                    </div>
                    <div>
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button" onClick={refetch}>Get Fact!</button>
                        <p className="text-white p-4 text-2xl">{catData.fact}</p>
                    </div>
                    <div>
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button" onClick={getRandomImage}>GetNewCat</button>
                        <div className='catDiv'>
                            <img className="catImg p-4" alt="Cat Pic" src={imgURL} />
                        </div> 
                    </div>
                </div>
            </div>
        </main>
        // <main>
        //     <h2 className="text-xl">Current user: {username}</h2>
        //     <div className="p-6">
        //         <ChangeProfile />
        //     </div>
            
        //     <div>
        //         <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button" onClick={refetch}>Get Fact!</button>
        //         <p className="p-4 text-2xl">{catData.fact}</p>
        //     </div>
            
        //     <div>
        //         <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button" onClick={getRandomImage}>GetNewCat</button>
        //         <div className='catDiv'>
        //             <img className="catImg p-4" alt="Cat Pic" src={imgURL} />
        //         </div> 
        //     </div>
            
        // </main>
    )
}

