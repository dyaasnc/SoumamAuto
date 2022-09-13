import React from 'react'
import { Link} from "react-router-dom";
function PrincipalP() {
  return (
    <div className='flex justify-between py-10 bg-blue-100 mobile:block'>
      <div className='flex-1'>
          <div>
              <img className='max-h-[764px]' src=" ../bg_car.jpg" alt="principal Img" />
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center '>
          <div className='flex-col justify-center items-center'>

          <h1 className='flex justify-center text-4xl text-center  '>everything to enjoy driving</h1>
          <p className='flex justify-center'>upto 50% Off</p>
          <Link to={'/allProducts'}>
          <div className='btn flex justify-center'> shop now</div>
          </Link>
          </div>
        </div>
        
    </div>
  )
}

export default PrincipalP