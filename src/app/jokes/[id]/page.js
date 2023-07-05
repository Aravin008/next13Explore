import Joke from './Joke';
import React from 'react';

export default function Report({params}) {
    const jokeId = params.id;
    return (
            <Joke jokeId={jokeId} />
        )
}