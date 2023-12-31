"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../components/loader";
const getJoke = async (id='random') => {
    try {
        const jokesList = await fetch('https://official-joke-api.appspot.com/jokes/'+id);
        const jokesListResult = await jokesList.json();
        return jokesListResult;
    } catch(err) {
        return null;
    }
}

export default function Joke(props) {
    const [joke, setJoke] = useState(null);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        const setData = async () => {
            const jokeWithId = await getJoke(props.jokeId);
            setJoke(jokeWithId);
        }
        setData();
        setFetching(false);
    },[]);

    const handleRandom = async () => {
        setFetching(true);
        const randomJoke = await getJoke();
        setJoke(randomJoke);
        setFetching(false);
    }
    return(
        <div>
            {(joke && !fetching) ?
            <div className="border border-solid border-orange-400 my-10">
                <p className="text-sm italic font-thin p-2 bg-orange-300">Type: {joke.type}</p>
                <p className="text-m font-bold p-2">Setup: {joke.setup}</p>
                <p className="my-10 p-2">Punch Line: {joke.punchline}</p>
            </div>
            :
            <div className='h-36 flex justify-center items-center'><Loader/></div>
            }
            <div className="border border-solid border-orange-400 my-10 flex items-center p-2 justify-around">
                Generate Random Joke: 
                <button onClick={() => handleRandom('random')} className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Click
                </button>
            </div>
        </div>
    )
}