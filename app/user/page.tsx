"use client"

import React, { useState } from 'react'

const UserPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        const data = await fetch(`/api/createUser`, {
            method: "POST",
            body: JSON.stringify({ email, name }),
        });

        const response = await data.json();

        if (!response.ok) console.log(response.message);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2 outline-none"
                style={{ border: "1px solid lightgray" }}
            />
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="p-2 outline-none"
                style={{ border: "1px solid lightgray" }}
            />

            <button type="submit">
                Create user
            </button>
        </form>
    )
}

export default UserPage