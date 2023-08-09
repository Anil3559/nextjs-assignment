import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from 'react';
import { RiDeleteBinLine} from 'react-icons/ri';


export const getStaticProps = async () => {


  // const data4 = await res.json();


  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  const res2 = await fetch("https://randomuser.me/api/?results=50");
  const data2 = await res2.json();
 const data3 = data2.results;

 //const [query, setQuery] = useState("");

  return {
    props: {
      data,data2,data3,
    },
  };
};

const blog = ({ data,data2,data3}) => {


  return (
    <>
      <Navbar />
<div className="ssr-styles3">
 <input type="text" className ="search_boxx" placeholder="search"  />
</div>
      {data.slice(0, 5).map((curElem,i) =>

      {
console.log(data3[i]);
//const[count,setCount]=useState(0);
 const isEvenOdd = (count)=>{
     return (count%2===0)
 }
    const  deleteComment = (elem) =>{
        const req =  fetch(`https://jsonplaceholder.typicode.com/posts/${elem}`, {
  method: 'DELETE',
});
         //const newData = req.json();
       //const data4 = req.json();
    console.log(elem);
    alert("Deleted Record Successfully ");
    }

        return (
          <div key={curElem.id} className={isEvenOdd(curElem.id)?"even_css ssr-styles":"odd_css ssr-styles"}>
            <div className="imgclass_main">
              <Image src={data3[i].picture.large} className="imgclass"  width={30} height={30} />
                <p>{data3[i].name.first}</p>
                <RiDeleteBinLine className="delete_icon" onClick={() => deleteComment(curElem.id)}/>
            </div>

            <p className="comment">{curElem.body}</p>
          </div>

        );
      })}
    </>
  );
};

export default blog;
