import logo from './images/logo.png';
import heroImage from './images/heroImage.png';
import batikBlue from './images/batik/batikBlue.png'
import batikWhite from './images/batik/batikWhite.png'
import jawa from './images/languageArea/jawa.png'
import madura from './images/languageArea/madura.png'
import sunda from './images/languageArea/sunda.png'
import bali from './images/languageArea/bali.png'
import sumatera from './images/languageArea/sumatera.png'
import video from './images/video.png'
import welcomeEmote from './images/emote/welcomeEmote.png'
import informEmote from './images/emote/informEmote.png'
import successEmote from './images/emote/successEmote.png'
import spiritEmote from './images/emote/spiritEmote.png'

export const assets = {
     logo, heroImage, batikBlue, batikWhite, video,
     welcomeEmote, informEmote, successEmote, spiritEmote
}

export const languageData = [
     {
          title: 'Bahasa Jawa',
          image: jawa
     }, {
          title: 'Bahasa Madura',
          image: madura
     }, {
          title: 'Bahasa Sunda',
          image: sunda
     }, {
          title: 'Bahasa Bali',
          image: bali
     }, {
          title: 'Bahasa Sumatera',
          image: sumatera
     }
]

export const navItems = [
     {
          title: 'Beranda',
          path: '/'
     }, {
          title: 'Tentang Kami',
          path: '/tentang-kami'
     }, {
          title: 'Peta',
          path: '/peta'
     }, {
          title: 'Quiz',
          path: '/quiz'
     }
]

export const footerItems = {
     pages: [
          {
               title: 'Beranda',
               path: '/'
          }, {
               title: 'Tentang Kami',
               path: '/tentang-kami'
          }, {
               title: 'Peta',
               path: '/peta'
          }, {
               title: 'Quiz',
               path: '/quiz'
          }
     ],
     contact: [
          {
               title: 'eksplosa@gmail.com',
          }, {
               title: '+62345678910',
          }, {
               title: '@eksplosa.dev'
          }
     ]
}

export const modalDatas = {
     mapPage: [
          {
               image: welcomeEmote,
               title: 'Halo, Selamat Datang!',
               description: 'Selamat datang di peta bahasa Eksplosa! Mari mulai petualanganmu menjelajahi keindahan bahasa daerah dan ciptakan pengalaman eksplorasi yang tak terlupakan.'
          }, {
               image: informEmote,
               title: 'Petunjuk Peta',
               description: 'Arahkan kursor untuk melihat informasi singkat, lalu klik provinsi pilihanmu untuk mulai menjelajahi kekayaan bahasa daerah.'
          }
     ],
     quizPage: [
          {
               image: successEmote,
               title: 'Wah Selamat!',
               description: 'Kamu telah menyelesaikan level ini dengan sangat baik, Gaca ikut bangga sama kamu, terus belajar di level selanjutnya ya!'
          }, {
               image: spiritEmote,
               title: 'Tetap Semangat!',
               description: 'Jangan menyerah! Coba lagi dan raih hasil terbaikmu. Gaca selalu ada untuk mendukungmu!'
          }
     ]
}