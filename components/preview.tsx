import { useAppContext } from "../context/AppContext."
import { useEffect, useState } from "react"
import Image from "next/image";
import styles from "../styles/Preview.module.css"
import Draggable from 'react-draggable';
import { forwardRef } from 'react';

type AppProps = {
    imageSrc: string;
};

const Preview = forwardRef<HTMLDivElement, AppProps>(({ imageSrc }, ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { img } = useAppContext()
    // const [render, setRender] = useState<boolean>(false)
    return (<>
        <div ref={ref} className={`${styles.containerPreview}`}>
            {
            imageSrc &&
            <Draggable bounds="parent">
                <div className={styles.previewWrapper}>
                        <img src={imageSrc} draggable="false" width="100%" height="100%" alt="preview" />
                </div>
            </Draggable>
            }
        </div>
    </>);
});

Preview.displayName = 'Preview';
export default Preview