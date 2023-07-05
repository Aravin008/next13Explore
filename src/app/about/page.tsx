
const getRepoInfos= async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json();
    console.log("Executing the getServerSideProps")
    return repo;
}


export default async function about() {
    const repo = await getRepoInfos();
    console.log("Fetch the page Details", repo)
    return (
        <div>
            <p>Repo Details: <pre className="">{JSON.stringify(repo, null, 2)}</pre></p>
        </div>
    )
}