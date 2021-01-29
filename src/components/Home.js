import React from "react"
import image from "../monstera_leaf.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="monstera leaf" className="absolute object-cover w-full h-full"/>
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="text-6xl text-green-100 fold-bold cursive leading-none lg:leading-snug home-name">Aloha. I'm Ari.</h1>
                </section>
        </main> 

    )
}