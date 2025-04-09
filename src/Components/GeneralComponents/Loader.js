import 'ldrs/ring'
import { Reuleaux } from 'ldrs/react'
import 'ldrs/react/Reuleaux.css'


export default function Loader () {
    return (<>
            <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50'>
            <Reuleaux
                size="67"
                stroke="10"
                strokeLength="0.15"
                bgOpacity="0.1"
                speed="1.2"
                color="purple" 
                />
            </div>
            </>
    
    )
}
