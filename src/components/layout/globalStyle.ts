/** @format */
import {createGlobalStyle} from 'styled-components'
import theme from '../../assets/theme'

const buildString = (minFontSize, maxFontSize) => {
  const {breakpoints} = theme
  return `calc(${minFontSize} + (${maxFontSize.replace('px', '')} - ${minFontSize.replace('px', '')}) * ((100vw - ${
    breakpoints[0]
  }) / (${breakpoints[breakpoints.length - 1].replace('px', '')} - ${breakpoints[0].replace('px', '')})))`
}

export default createGlobalStyle`
    * { 
      scroll-behavior: smooth;
      padding: 0;

    }
    main {
      background-color: ${theme.colors.background}
    }
    @font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;

  }
  h1{
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    font-size: ${buildString('36px', '50px')};
    margin: 15px 0px;
    }
  .title {
    font-size:${buildString('42px', '60px')};
  }
  h2{  
    margin: 10px 0px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    font-size: ${buildString('20px', '40px')}};
  h3{  
    margin: 10px 0px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    font-size: ${buildString('16px', '28px')}};
  p, .p{
      font-size: 1.1em;
      line-height: 1.6em;
      font-family: "Roboto", sans-serif;
      text-align: justify;
      /* font-weight: 100; */
    }
  a {
    text-decoration: none;
  }
  ul {
    margin:0;
  }
  `
