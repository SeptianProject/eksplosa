import CardInformation from "../fragments/CardInformation"

const ListCardInformation = () => {
     return (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 z-10 w-full">
               <CardInformation
                    number={1}
                    title="980,870"
                    titleSpan="Pengguna"
                    description="Eksplosa telah menjadi rumah bagi lebih dari 900.000 pengguna aktif 
                    sejak 2014, dan fitur yang terus berkembang. Bergabunglah dan ikut serta dalam 
                    gerakan pelestarian bahasa untuk masa depan yang lebih kaya budaya."
               />
               <CardInformation
                    number={2}
                    title="340"
                    titleSpan="Bahasa"
                    description="Eksplosa mendukung pelestarian lebih dari 340 bahasa daerah, 
                    menjadikan setiap kata sebagai jembatan untuk menjaga kekayaan budaya 
                    Indonesia. Bergabunglah untuk belajar, berbagi, dan melestarikan 
                    bahasa-bahasa yang mendefinisikan identitas kita."
               />
               <CardInformation
                    isFeatured
                    number={3}
                    title="Fitur"
                    titleSpan="Eksplorasi"
                    description="Fitur Eksplorasi Eksplosa memungkinkan Anda untuk menyelami 
                    lebih dalam bahasa, budaya, dan cerita daerah Indonesia. Temukan keunikan 
                    setiap bahasa, pelajari lebih lanjut, dan jadilah bagian dari upaya 
                    pelestarian yang berarti."
               />
               <CardInformation
                    isFeatured
                    number={4}
                    title="Quiz"
                    titleSpan="Belajar Interaktif"
                    description="Tantang dirimu dengan Quiz Belajar Interaktif di Eksplosa! 
                    Nikmati cara menyenangkan untuk menguji pengetahuanmu tentang bahasa dan 
                    budaya daerah, serta memperdalam pemahaman dengan setiap kuis yang kamu 
                    selesaikan."
               />
          </div>
     )
}

export default ListCardInformation