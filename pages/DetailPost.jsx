import { useParams } from "react-router-dom"
import Navbar from "./components/NavBar"
import { useEffect, useState } from "react"
import { getPostById } from "@/lib/api"
import { toast } from "sonner"
export default function DetailPost () {

    const { id }= useParams()
    const { posts, setPosts }= useState([])

    useEffect (() => {
        getPostById(id)
        .then ((posts) => {
            setPosts(posts)  
        }). catch((error) => {
            toast.error ("No se encontro el Post")
        }) 
    }, [id])





    return (

        <main className="w-full grid-col-start-1 grid-col-end-2 sm:grid-col-start-2 sm:grid-col-end-3 overflow-hidden rounded-md">
            <Navbar/>
            
            
            <div>
            {posts && posts.length > 0 ? (
                    posts.map((post, id) => (
                        <div key={`key-${id}`}>
                            <img className="w-15 rounded-[50%] p-1" src={post.image.id} alt={`Post ${idx}`} />
                        </div>
                    ))
                ) : (
                    <p>No se encontraron posts.</p>
                )}
            

            </div>

        


        </main>
    )
}