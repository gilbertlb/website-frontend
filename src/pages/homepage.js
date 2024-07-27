import React, { useState, useEffect } from 'react';

function HomePage() {
  // const [response, setResponse] = useState('');

  // useEffect(()=>{
  //   fetch('http://localhost:5200/test').then((response)=>{
  //     // console.log(response);
  //     // setResponse()
  //     // console.log(response.arrayBuffer())
  //     response.text().then((data)=>{
  //       console.log(data);
  //       setResponse(data);
  //     })
  //     // response.json().then((data)=>{
  //     //   console.log(data);
  //     //   // setResponse(data);
  //     // })
  //   }).catch((error)=>{console.log(error)})
  // },[])
  // console.log("Landed on homepage");

  return (
    <div style={{ height: "1200px" }}>
      <hgroup>
        <h1 data-aos="zoom-in" data-aos-once="true" data-aos-duration="2000">The home page</h1>
        <p>A description</p>
      </hgroup>
      <section>
        <h2>About Me</h2>
        <p>
          I'm a full-stack developer with experience across a number of languages and tech stacks, including .NET and NodeJS
          Working on this website to eventually be a hub for hosting some future projects of mine
        </p>
      </section>
      {/* <section>
        <h2>What is ReturnToCodeMonkey?</h2>
        <p>
          For the name, it's a play on the slang term "code monkey" and the internet phrase "return to monkey"<br />
          In terms of the purpose of this website, this is primarily a place for me to demo things I've created or host projects made for clients<br />
          Frankly, this website is far from finished and very early in development
        </p>
      </section> */}
    </div>
  );
}

export default HomePage;
