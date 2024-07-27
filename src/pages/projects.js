import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import { MainPage } from "Components/Pages/Main";

function ProjectsPage() {
//   const [response, setResponse] = useState('');

//   useEffect(()=>{
//     fetch('http://localhost:5200/test').then((response)=>{
//       // console.log(response);
//       // setResponse()
//       // console.log(response.arrayBuffer())
//       response.text().then((data)=>{
//         console.log(data);
//         setResponse(data);
//       })
//       // response.json().then((data)=>{
//       //   console.log(data);
//       //   // setResponse(data);
//       // })
//     }).catch((error)=>{console.log(error)})
//   },[])

  return <>
  <div>
      <hgroup>
      {/* <h1 data-aos="zoom-in" data-aos-once="true" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom">The home page</h1> */}
        <h1 data-aos="zoom-in" data-aos-once="true" data-aos-duration="2000">Projects</h1>
        <p>This is the project page</p>
      </hgroup>
      <section>
        <h2>ReturnToCodeMonkey.com</h2>
        {/* <img>Image Here</img> */}
        <p>
          This website itself is a NodeJS application built with React, Bootstrap, and Font Awesome. The frontend code is publically available on <a href="https://github.com/gilbertlb/website-frontend">GitHub</a>
        </p>
      </section>
    </div>
  </>;
}

export default ProjectsPage;
