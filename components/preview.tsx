import { useAppContext } from "../context/AppContext."
import { useEffect, useState } from "react"
import Image from "next/image";
import styles from "../styles/Preview.module.css"

type AppProps = {
    imageSrc: string;
};

const Preview = ({ imageSrc }: AppProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { img } = useAppContext()
    // const [render, setRender] = useState<boolean>(false)

    return (<>
        <div className={styles.previewWrapper}>
            {
                imageSrc && <Image src={imageSrc} layout="responsive" alt="preview" />
            }
        </div>
    </>)
}

export default Preview