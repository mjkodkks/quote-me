import { useAppContext } from "../context/AppContext."
import { useEffect, useState } from "react"
import Image from 'next/image'

const preview = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { img } = useAppContext()
    const [render, setRender] = useState<boolean>(false)

    useEffect(()=> {
        console.log(img)
    },[])

    return (<>
        <div className="preview-wrapper">
            <div style={{ width: '200px' ,height: '200px', overflow: 'auto'}}>
            test img {img}

            </div>
          {/* {contextStore.img && <Image src={contextStore.img} width={200} height={200} alt="preview" />} */}

          <img src={img} width={200} height={200} alt="preview" />
        </div>
    </>)
}

export default preview