import { useAppContext } from "../context/AppContext.";


const upload = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { setImg } = useAppContext()

   function imageChange(event: { target: HTMLInputElement; }) {
      console.log(event)
      const files = event.target.files;
      if (files) {
         // eslint-disable-next-line react-hooks/rules-of-hooks
         const fileReader = new FileReader();

         fileReader.onload = (e: any) => {
            const { result } = e.target;
            if (result) {
               setImg(result)
            }
         }
         fileReader.readAsDataURL(files[0]);
      }
   }

   return (<>
      <div className="upload-wrapper">
         <input type="file" name="myImage" accept="image/*" onChange={imageChange} />
      </div>
   </>)
}

export default upload