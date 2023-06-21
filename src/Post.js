import React from "react";
export function Post(props) {
    return ( 
   <div  class="card" style={{width:" 14rem"}}>
  <img src={props.url} class="card-img-top" style={{width:"160px",height:"170px"}} alt="..."/>
  <div class="card-body">
    <p class="card-text" ></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Post</li>
    <li class="list-group-item">user</li>
 
  </ul>
</div>

     );
}

