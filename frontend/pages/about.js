import React from 'react'
import Header from "../components/Header";
import pic from "../img/profilepic.png";
import Image from  'next/image';

const About = () => {
  const headerprops = {
    title: "ABDILADIF HASSAN ADAN",
    desc: "I am a Well-qualified Full Stack, Cross Platform and Blockchain Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease and a Collaborative team player with excellent technical abilities. ",
      pic,
    g1: "Full Stack Dev",
    g2: "Cross Platform Dev",
    g3: "Software Dev",
    g4: "Blockchain Dev",
    g5: "Frontend Dev",
    g6: "Backend Dev",
    bg: "about",
    skills: "Skills"
  };
  return (
    <div>
       <Header {...headerprops} />
        <div className='about '>
          <h1 className='text-center text-white text-5xl font-semibold'>OPEN TO WORK</h1>
        </div>

    </div>
  )
}

export default About