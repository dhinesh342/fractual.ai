import { useEffect, useState,useRef } from "react";

import "./Home.css";

import TextField from '@mui/material/TextField';
import { CardActionArea, Grid } from '@mui/material';

import Navbar from "./Navbar";
import RepoCard from "./RepoCard";
import axios from "axios";
import { Flag } from "@mui/icons-material";

function Home() {
   const [search,setSearch]=useState('');
   const [proxySearch,setProxySearch]=useState('');
   const [data,setData]=useState();
   const [page,setPage]=useState(1);
   const [observerTriggered,setObserverTriggered]=useState(false);


   function getSearchContent(e){
    setProxySearch(e.target.value);
   }

   //intersection observer

   const observerTarget = useRef(null);

   useEffect(() => {
    const observer = new IntersectionObserver( 
      (entries) => {
        if (entries[0].isIntersecting && observerTriggered) {
          // if (items.length !== 0) setPage((prev) => prev + 1);
          setPage((prev) => prev + 1);
          console.log("intersection observer")
          setObserverTriggered(false);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [observerTarget,observerTriggered]);

   useEffect(()=>{
    let timer=setInterval(() => {
      setSearch(proxySearch);
    }, 2000);

    return ()=>{clearInterval(timer)}
   },[proxySearch])

   useEffect(()=>{ 
    if(search){
      axios.get(`https://api.github.com/search/repositories?q=${search}&page=${page}&per_page=10`).then((e)=>{
        // console.log(e.data.items)
        if(data){
          setData((prev)=>[...prev,...e.data.items])

        }else{
          setData(e.data.items)
        }
        setObserverTriggered(true);
      })
      // console.log(data);
      console.log(data);
    }
    
   },[search,page])

  return (
    <div id="parent">
      <Navbar />
      <TextField id="outlined-basic" label="Search Repositories" variant="outlined" onChange={getSearchContent} style={{marginTop:"5px"}} />
      <Grid spacing={5} container
                direction="row"
                justifyContent="center"
                alignItems="center">
              
        {data && data.map((item,index)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={index} >
              <RepoCard data={item} />
            </Grid>
          ) 
        })
        
        }
        <div ref={observerTarget} ></div>
        
        
      

      </Grid>
      

    </div>
  );
}

export default Home;
