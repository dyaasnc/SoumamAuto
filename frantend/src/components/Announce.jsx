import {React, useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Announce() {
    const[announceStyle,setAnnounceStyle] = useState('bg-blue-400 font-bold text-white flex items-center justify-center')
    const handleClose =()=>{
        setAnnounceStyle(announceStyle+' hidden')
    }
  return (
    <div className={announceStyle}>
        <h2 >it's 40% off now !</h2>
        <CloseIcon className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce