import logo from './images/logo.png';
import heroImage from './images/heroImage.png';
import batikBlue from './images/batikBlue.png'
import batikWhite from './images/batikWhite.png'

import jawa from './images/jawa.png'
import madura from './images/madura.png'
import sunda from './images/sunda.png'
import bali from './images/bali.png'
import sumatera from './images/sumatera.png'
import video from './images/video.png'

export const assets = {
     logo, heroImage, batikBlue, batikWhite, video
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