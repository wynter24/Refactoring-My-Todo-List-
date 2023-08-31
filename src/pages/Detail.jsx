// import React, { useState } from 'react'
import { styled } from 'styled-components'

const DetailBox = styled.div`
  border: 1px solid gray;
`


function Detail() {
  // const[detailPost, setDetail] = useState(
  //   {

  //   }
  // );


  return (
    <DetailBox>
      <div>
        <p>id</p>
        <button>이전으로</button>
      </div>
      <div>
        <p>Detail</p>
        <p>Detail</p>
      </div>

    </DetailBox>
    

  )
}

export default Detail