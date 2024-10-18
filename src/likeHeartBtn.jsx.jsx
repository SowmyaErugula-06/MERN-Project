import { useState } from "react";
function LikeHeartBtn(){
    let[isliked ,setisliked]=useState(false)
    function likebtn(){
        setisliked((isliked)=>{
            return !isliked
        })
    }
    if(!isliked){
        return(
          <div>
            <span onclick={likebtn}><i class="fa-regular fa-heart"></i></span>
          </div>
        )
    }
    else{
        return(
            <div>
                <span onclick={likebtn}><i class="fa-regular fa-heart"></i></span>
            </div>
        )
    }
}
export default LikeHeartBtn