/*
image size
large 843 X 403, medium: 674 *300, small; 300 X 100*/
import churcharea from "../images/assets/img/2022/IMG-20220112-WA0003.jpg"
import churcharea2 from "../images/assets/img/2022/IMG-20220112-WA0004.jpg"
import slide1 from "../images/assets/img/2022/slide1_lg.jpg"
import slide1md from "../images/assets/img/2022/slide1_md.jpg"
import slide1sm from "../images/assets/img/2022/slide1_sm.jpg"
import slide2 from "../images/assets/img/2022/slide2_lg.jpg"
import slide2md from "../images/assets/img/2022/slide2_lg.jpg"
import slide2sm from "../images/assets/img/2022/slide2_sm.jpg"
import slide3 from "../images/assets/img/2022/slide3_lg.jpg"
import slide3md from "../images/assets/img/2022/slide3_md.jpg"
import slide3sm from "../images/assets/img/2022/slide3_sm.jpg"
import slide4 from "../images/assets/img/2022/slide4_lg.jpg"

import im1 from "../images/assets/img/2024/IMG-20231230-WA0011.jpg"
import im2 from "../images/assets/img/2024/IMG-20231230-WA0004.jpg"
import im3 from "../images/assets/img/2023/IMG-20230111-WA0006.jpg"
import im4 from "../images/assets/img/2024/IMG-20231230-WA0010.jpg"
import im5 from "../images/assets/img/2024/IMG-20231230-WA0006.jpg"
import im6 from "../images/assets/img/2024/IMG-20231230-WA0013.jpg"
import im7 from "../images/assets/img/2023/lakeviewsunday.jpg"
import im8 from "../images/assets/img/2024/IMG-20231230-WA0003.jpg"

import im10 from "../images/assets/img/2023/IMG-20230112-WA0002.jpg"

import theme2025 from "../images/assets/img/2025/theme.jpg"
import companionshipImg from "../images/assets/img/2024/IMG-20231230-WA0005.jpg"
const day = new Date().getDay() % 2 === 0

export const smallSlides = [im8, im1, companionshipImg, im2]

export const carosel = [
  {
    pic: theme2025,
    picMd: theme2025,
    picSm: theme2025,
    caption: "",
    active: true,
  },
  {
    pic: im4,
    picMd: im4,
    picSm: im4,
    caption:
      " Rev Dr. Robert Langat ,Bishop AGC, with Rev Delton Orgeness, lead pastor Lakeview AGC",
    active: false,
  },
  {
    pic: im2,
    picMd: im2,
    picSm: im2,
    caption: "Rev Isaac Saoshiro, the missionary who planted Lakeview AGC",
    active: false,
  },
  {
    pic: im1,
    picMd: im1,
    picSm: im1,
    caption: "VBS Sunday",
    active: false,
  },
  {
    pic: im8,
    picMd: im8,
    picSm: im8,
    caption: "",
    active: false,
  },

  {
    pic: im5,
    picMd: im5,
    picSm: im5,
    caption: "",
    active: false,
  },

  {
    pic: im6,
    picMd: im6,
    picSm: im6,
    caption: "Saoshiro Christian Education centre",
    active: false,
  },
 

 
]
