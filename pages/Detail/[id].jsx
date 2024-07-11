import { getPostById, getUser} from "@/lib/api"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Navbar from "../components/NavBar"
export default function PostDetail () {
  const router = useRouter()
  const [ post, setPost ] = useState({})
  const [ user, setUser ] = useState ({})
  const { id } = router.query 

  useEffect (() => {
    if (id) {
      getPostById(id)
      .then ( data => {
        setPost(data)
      }) .catch (error => {
        console.error("No se encontro el post", error)
      })
    } 
  }, [id]) 
  
  useEffect (() => {
    if (post.user) {
      getUser(post.user)
      .then ( data => {
        setUser(data)
      })
    } 
  }, [post.user]) 

  return (
    
    <main className="flex flex-col bg-gray-500/20 w-full min-h-screen" >
      
      <header>
        <Navbar />
      </header>
      
      <div className="mt-4 ml-96 rounded-md bg-white w-5/12">
      <span className="">
        <img className= "w-full rounded-t-md"  src={post.image} alt="Post Image" />
      </span>
      
      <span >
      <img className="size-10 rounded-full m-2" src={user.profilePic} alt="" />
        <h1>{user.name}</h1>
      <h1>{post.tittle}</h1>
      <span>{post.created_at}</span>
      <p>{post.body}</p>
      </span>
      
    </div>


    </main>
    
    
    
  )
}