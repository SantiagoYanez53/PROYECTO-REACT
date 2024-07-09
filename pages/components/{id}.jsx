
import { useRouter } from "next/router";
import { getPostById } from "@/lib/api";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function SinglePost({ id }) {
  

  const [post, setPost] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (id) {
      getPostById(id, token)
        .then((post) => {
          setPost(post);
        })
        .catch((error) => {
          toast.error("No hay Información");
        });
    }
  }, [id]);

  if (!posts) {
    return <div>No hay información disponible</div>;
  }

  return (
    
      <main className="m-auto max-w-[1380px] flex flex-row">
        <div className="">
          <div className="flex">
            <article className="bg-white rounded-xl">
              <Image
                src={post.user.image}
                width={800}
                height={630}
                className="rounded-md"
              />
              <section className="p-4">
                <div className="flex flex-row items-center gap-2 my-2 p-4 ">
                  <div className="w-[10%] rounded-full items-center justify-center">
                    <Image
                      src={post.user.profilePic}
                      width={90}
                      height={90}
                      className="rounded-full mr-2 lg:w-8/12 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <Link href="" className="text-[14px] font-semibold">
                      {post.user.name}
                    </Link>
                    <Link href="" className="text-[12px]">
                      {Date(posts.createdAt)}
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row gap-2 ">
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-2">
                      <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px]">
                        <Image
                          width={18}
                          height={18}
                          src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                        />
                      </span>
                      <span>16</span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ">
                        <Image
                          width={18}
                          height={18}
                          src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                        />
                      </span>
                      <span>16</span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ">
                        <Image
                          width={18}
                          height={18}
                          src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                        />
                      </span>
                      <span>16</span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ">
                        <Image
                          width={18}
                          height={18}
                          src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                        />
                      </span>
                      <span>16</span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ">
                        <Image
                          width={24}
                          height={24}
                          src=" https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                        />
                      </span>
                      <span>16</span>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold text-[20px]">{post.name}</h3>
                  <ul className="flex flex-row gap-2 text-sm">
                    <li>#react</li>
                    <li>#remixrun</li>
                    <li>#webdev</li>
                    <li>#javascript</li>
                  </ul>
                </div>
                <section>{posts.body}</section>
                <div className="mt-4">
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold">Top Comments(26)</h4>
                    <button className="border shadow-sm px-4 py-2 rounded">
                      Suscribe
                    </button>
                  </div>
                  <div className="mt-4 flex flex-row gap-4">
                    <div className="w-[10%] ">
                      <div className=" rounded-full items-center justify-center">
                        <Image
                          src={post.user.profilePic}
                          width={90}
                          height={90}
                          className="rounded-full mr-2 lg:w-8/12 "
                        />
                      </div>
                    </div>
                    <div className="w-[90%] h-[100px] border shadow-sm p-4 rounded-sm">
                      <p>Escrinir algo</p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="rounded-lg border m-2 p-4">
                <p>👋 Before you go</p>
                <h4 className="font-bold">Your next step</h4>
                <p>Do your career a favor. Join DEV.</p>
                <p>It takes one minute and is worth it for your career.</p>
              </div>
            </article>
          </div>

          <div className="">
            <div className=" lg:flex  lg:flex-col ">
              <div className=" bg-white rounded-md shadow-sm mb-4 p-4 border-t-[24px] border-[#3B49DF]">
                {/* <hr className="bg-[#3B49DF]" /> */}
                <div className="flex flex-row items-center gap-2 my-4">
                  <div className="w-[15%] rounded-full items-center justify-center">
                    <Image
                      src={post.user.profilePic}
                      width={90}
                      height={90}
                      className="rounded-full mr-2 lg:w-8/12 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <Link href="" className="text-[14px] font-semibold">
                      {post.user.name}
                    </Link>
                    <Link href="" className="text-[12px]">
                      {Date(posts.user.createdAt)}
                    </Link>
                  </div>
                </div>
                <div>
                  <button className="bg-[#3B49DF] w-full py-2 text-white rounded-md">
                    Follow
                  </button>
                  <div className="flex flex-col">
                    <p className="mt-4">
                      A Canadian software developer who thinks he’s funny.
                    </p>
                    <p className="mt-4">
                      <strong> LOCATION</strong> <br></br>NY EDUCATION Mount
                      Allison University
                    </p>
                    <p className="mt-4">
                      <strong>PRONOUNS</strong>
                      <br></br> He/him
                    </p>
                    <p className="mt-4">
                      <strong> WORK</strong>
                      <br></br> Co-founder at Forem
                    </p>
                    <p className="mt-4">
                      <strong> JOINED</strong>
                      <br></br> Dec 27, 2015
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-white rounded shadow-sm mb-4">
                <div className="p-4 border-b-[.5px] border-gray-100">
                  <h2 className="font-bold text-xl ">
                    More from{" "}
                    <span className="text-[#3B49DF]">Ben Halpern</span>
                  </h2>
                  <p className="text-[10px] text-[#575757]">
                    Light, and off-topic conversation.
                  </p>
                </div>
                <div className="flex flex-col">
                  <Link className="p-4 border-b-[.5px] border-gray-100" href="">
                    window.ai - running AI LOCALLY from DevTools!
                  </Link>
                  <Link className="p-4 border-b-[.5px] border-gray-100" href="">
                    window.ai - running AI LOCALLY from DevTools!
                  </Link>
                  <Link className="p-4 border-b-[.5px] border-gray-100" href="">
                    window.ai - running AI LOCALLY from DevTools!
                  </Link>
                </div>
              </div>
              <div className="p-4 bg-white rounded md:max-h-[60vh] md:overflow-y-auto lg:max-h-none shadow-sm ">
                <p>
                  <Image
                    className="rounded-md mb-4"
                    width={350}
                    height={350}
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
                  />
                </p>
                <h2 className="font-bold text-xl mb-4">
                  Life is too short to browse without{" "}
                  <span className="underline text-[#3B49DF]"> dark mode.</span>
                </h2>
                <p>
                  We re a place where coders share, stay up-to-date and grow
                  their careers.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>

  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: { id },
  };
}