import { useState, useEffect } from "react"; 
import { getPost, getPostById } from "@/lib/api";
import { Post } from "react-router-dom";


    export default function Content ({}) {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
          getPost ()
          .then((content) => {
            setPosts(content)
          })
          }
  
      ,[]);



        return (
            <main className="flex flex-col justify-center items-center">
                <div className=" bg-white mb-3 rounded-md w-8/12">
                    <img className="flex flex-col justify-center w-full rounded-t-md pb-2"src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F445qmtczsqgd4536xqg3.png" alt="image" />
                    
                    <span className="flex ">
                        <img className="w-9 rounded-[50%] p-1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg" alt="user"/>
                        <p className="p-1 text-sm">Anmol Baranwal</p>
                    </span>

                    <h1 className="font-bold text-4xl  pl-12">
                    15 amazing things you can do with simple JavaScript
                    </h1>
                    <p className="text-sm pl-12 pt-2 opacity-80 mb-4">#Javascript   #beginners   #programming   #webdv</p>
                </div>
                <header>
                <h1>Posts</h1>
            </header>
            <div className="w-full flex flex-col bg-white rounded-md pb-8">
              {
                posts.map((post,idx) => {
                  return(
                    <>
                    <img className="
                                    w-full
                                    rounded-t-lg
                                " src="https://imgs.search.brave.com/BWn2ZkEOnHxoCZDzIemCAb2d2anSn-jSEBkT-FbBBA0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYW5hZGlhbi1t/b3VudGFpbi1sYW5k/c2NhcGUtbmF0dXJl/LWJhY2tncm91bmQt/c3Vuc2V0XzY0NTg4/Mi0xMjU1Ni5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" alt="" 
                                />
                                <div className="
                                    w-full
                                    p-4
                                    flex
                                    gap-4
                                ">
                                    <img className="
                                        size-10
                                        rounded-full
                                    " src="https://imgs.search.brave.com/JLmCvOzUW0TXutsulsNiriUdvcbxhtIKdcfMxN2BI30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk1LzE1Lzc5/LzM2MF9GXzQ5NTE1/Nzk3MV96SWh6amZ4/M3lHMUFzZ1lPVFFT/OVo2VkhBc04wT0pT/SS5qcGc" alt="" 
                                    />
                                    <div className="
                                        w-full
                                        flex
                                        flex-col
                                    " > 
                                        <h1 className="
                                            font-semibold
                                        ">Name</h1>
                                        <span className="
                                            text-xs
                                            text-[#ACACAC]
                                        " >Jul 8</span>
                                    </div>
                                </div>
                                
                            </>
                        )
                    })
                }
                    
                  
                  
            </div>
                
                
            </main>
            
      
        )
    }