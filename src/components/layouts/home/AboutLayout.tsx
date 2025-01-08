import CloudElement from "../../elements/CloudElement"
import ListCardInformation from "../ListCardInformation"


const AboutLayout = () => {
     return (
          <div className="mt-16 lg:min-h-screen lg:px-40">
               <div className="flex flex-col relative items-center justify-center gap-y-12">
                    <h2 className="text-lg xs:text-xl md:text-3xl max-w-md font-medium text-center z-10 px-6 md:px-0">
                         Kenapa kamu harus memilih <span className="font-bold">Eksplosa?</span>
                    </h2>
                    <ListCardInformation />
                    <div className="absolute bg-primary w-full inset-0 rounded-full 
                    h-[30rem] top-[30rem] lg:h-80 lg:top-72 lg:rounded-none">
                         <div className="flex items-center justify-center h-full gap-x-10">
                              <CloudElement />
                              <CloudElement />
                              <CloudElement />
                              <CloudElement />
                              <CloudElement />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AboutLayout