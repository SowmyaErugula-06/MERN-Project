// 
import { useState } from "react";
function likeHeartBtn(){
    let [isliked,setisliked]=useState(false);
    function likebtn(){
        setisliked((isliked)=>{
            return !isliked
        })
    }
    if(!isliked){
        return(
            <div>
                <span onClick={likebtn}><i className="fa-regular fa-heart"></i></span>
            </div>
        )
    }
    else {
        return (
            <div>
                <span onClick={likebtn}>
                    <i className="fa-regular fa-heart" style={{ backgroundColor: "red" }}></i>
                </span>
            </div>
        );
    }
}    
export default likeHeartBtn;