import { useRef, useState } from "react";
import { useAppContext } from "../context/AppContext.";
type AppProps = {
   onImgChange: (a: string) => void;
};

const Upload = ({ onImgChange }: AppProps) => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   // const { setImg } = useAppContext()
   const [imageUpload, setimageUpload] = useState(null)

   function imageChange(event: { target: HTMLInputElement; }) {
      const files = event.target.files;
      if (files && files.length > 0) {
         // eslint-disable-next-line react-hooks/rules-of-hooks
         const fileReader = new FileReader();

         fileReader.onload = (e: any) => {
            const { result } = e.target;
            if (result) {
               onImgChange(result)
               setimageUpload(result)
            }
         }
         fileReader.readAsDataURL(files[0]);
      } else {
         onImgChange('')
      }
   }

   const inputUploadRef = useRef<HTMLInputElement>(null)

   function clearImage() {
      if (inputUploadRef.current) {
         inputUploadRef.current.value = ""
      }
      onImgChange('')
   }

   return (<>
      <div className="flex gap-2">
         <div className="">
            <input ref={inputUploadRef} type="file" name="myImage" accept="image/*" onChange={imageChange} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
         </div>
         {
            imageUpload &&
            <button className="btn btn-square" onClick={clearImage}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         }
      </div>
   </>)
}

export default Upload