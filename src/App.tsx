import {Post} from "./components/Post"
import {Header} from  "./components/Header"
import {Sidebar} from "./components/Sidebar"

import styled from  "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/35750714?v=4",
      name: "Jonathan Da Silva",
      role: "Front-end Developer"
    },
    content: [
      {type: "paragraph", content:  "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-09-14 14:00:00")
  },
  {
    id: 2,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/35750714?v=4",
      name: "Mitio Noguchi",
      role: "Back-end Developer"
    },
    content: [
      {type: "paragraph", content:  "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-09-13 11:00:00")
  }
]

function App() {

  return (
    <>
      <Header/>
     
     <div className={styled.wrapper}>
        <Sidebar />
         
        <main>
          {posts.map(post =>{
            return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
          
     </div>
   </>
  )
}

export default App
