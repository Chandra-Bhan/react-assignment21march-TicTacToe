import React from 'react';
import Card1 from './Card1/Card1';
import style1 from './Card1/Card1.module.css'


function Card() {

    const info=[
        {
        id:1,
        img:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Leslie Alexander",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Ralph Edwards",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:3,
        img:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name:"Albert Flores",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:4,
        img:"https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960",
        name:"Kathryn Murphy",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:5,
        img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name:"Harsh Borica",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:6,
        img:"https://static.toiimg.com/photo/95911950.cms",
        name:"Mohit Kadwe",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:7,
        img:"https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
        name:"Gokul R",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    },
    {
        id:8,
        img:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
        name:"Abdul Salim",
        designation:"Product Manger @Google india",
        exp:"4 Yrs Exp."
    }

]


  return (
    <div>
    <h1 style={{color:"skyblue"}}>Assignment 1 - Horizontal scroller</h1>
    <h1>Know your mentors</h1>
    <p>Work with a mentor data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.</p>
    <div className={style1.cardContainer}>
    {
        info.map((e,index)=>
      <Card1 key={index} img={e.img} name={e.name} designation={e.designation} exp={e.exp}/>
        )
    }
    </div>
    </div>
  );
}

export default Card;
