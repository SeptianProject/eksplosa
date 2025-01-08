import { assets } from '../../assets'

const CloudElement = ({ className }: { className?: string }) => {
     return (
          <img
               alt="CloudSundanese"
               src={assets.batikWhite}
               className={`${className} size-40 object-contain md:size-56`} />
     )
}

export default CloudElement