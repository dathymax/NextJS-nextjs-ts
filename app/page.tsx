import Link from "next/link";

async function getUsers() {
    const response = await fetch(`/api/getUsers`);

    if (!response.ok) {
        console.log(response);
    }

    return response.json()
}

export default async function Home() {
    const data: { id: number, email: string, name: string }[] = await getUsers();

    return (
        <main className="py-8 px-48">
            <Link
                href={"/user"}
                className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md hover:opacity-80">
                Go to the User page
            </Link>
            {data.map(user => {
                return (
                    <div key={user.id}>
                        <h2>{user.email} with id = {user.id}</h2>
                    </div>
                )
            })}
        </main>
    )
}
