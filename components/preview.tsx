import { useAppContext } from "../context/AppContext."
import { useEffect, useState } from "react"
import Image from "next/image";
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
        <div ref={ref} className="min-w-[400px] min-h-[400px] relative border border-red-400">
            {
                imageSrc &&
                <Draggable bounds="parent">
                    <img src={imageSrc} draggable="false" width="200" height="200" alt="preview" />
                </Draggable>
            }
        </div>
    </>);
});

Preview.displayName = 'Preview';
export default Preview