import Aside from "./components/Aside";
import AsideRight from "./components/AsideRight";
import Content from "./components/Content";
import Navbar from "./components/NavBar";
import { getPost } from "@/lib/api";
import { toast } from "sonner";
import Link from "next/link";
import { useEffect, useState } from "react";

//components
export default function Home () {
    return (
        <main className="w-full min-h-screen bg-gray-500/20 grid grid-cols-[20%_3fr_20%] grid-rows-[4rem_3fr] ">
            
            <header className="col-span-3 sticky"> 
                <Navbar />
            </header>
            
            
            <aside className="row-span-2">
                <Aside/>
            </aside>

            <section className=" p-4">
                <Content />
            </section>

            <aside className="row-span-2">
                <AsideRight/>
            </aside>
          
        </main>
    )   
}

export async function getServerSideProps() {
    try {
      const post = await getPost ();
  
      return {
        props: {
          post ,
        },
      };
    } catch (error) {
      toast.error(error);
      console.error(error);
  
      return {
        props: {
          post: [],
        },
      };
    }
  }