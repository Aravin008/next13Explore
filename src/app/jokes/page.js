import Link from "next/link";

const getJokesList = async () => {
    const jokesList = await fetch('https://official-joke-api.appspot.com/random_ten', { next: { revalidate: 2 * 60 }});
    const jokesListResult = await jokesList.json();
    return jokesListResult;
}

export default async function TestPage() {
    const jokes = await getJokesList();
    return <div>
        <h2 className="text-2xl font-bold">Jokes</h2>
        <div>
            {
                jokes && jokes.map(joke => {
                    return (
                        <Link href={`/jokes/${joke.id}`}>
                            <p className="my-2 p-2 border border-red-300 border-solid">{joke.setup}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
}