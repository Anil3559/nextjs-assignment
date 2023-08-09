import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from 'next/image';

import { RiDeleteBinLine} from 'react-icons/ri';
import {BsSearch} from "react-icons/bs";


export const getStaticProps = async () => {
    //comment fetch
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    //user fetch
      const res2 = await fetch("https://randomuser.me/api/?results=50");
      const data2 = await res2.json();
     const data3 = data2.results;



  return {
    props: {
      data,data3,
    },
  };
};

const blog = ({ data,data3}) => {
    const commentList  = [];
     data.slice(0, 50).map((curElem2) => {

        // let comment_array:[] = curElem2.body;
         const commentList2 = {
  id: curElem2.id,
  body: curElem2.body
};
        commentList.push(commentList2);
//console.log(commentList);
        //return ;
    });
console.log(commentList);

    const [comments, setComments] = useState(commentList);
    const [searchVal, setSearchVal] = useState("");

    function handleSearchClick () {
        if (searchVal === "") {
            setComments(commentList);
            //console.log(searchVal);
            //console.log('all');
            return;
        }
        const filterBySearch = commentList.filter((item) => {
            if (item.body.toLowerCase()
                .includes(searchVal.toLowerCase())) {
                // console.log(item);
                // console.log('search');
                return item;
             }
        })
        setComments(filterBySearch);
    }

//console.log(comments);
  return (
    <>
      <Navbar />
<div className="ssr-styles3"><BsSearch className="search_icon" onClick={handleSearchClick} />
 <input type="text" className ="search_boxx" placeholder="search" onChange={e => setSearchVal(e.target.value)} />

</div>

      { comments.slice(0, 50).map((curElem,i) =>

      {
//console.log(data3[i]);
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
