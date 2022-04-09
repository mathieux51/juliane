import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const _createGlobalStyle = createGlobalStyle`
  ${normalize()}

    /* Reset */
  button {
    border: 0;
    padding: 0;
    background: transparent;
  }
  button:hover {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  p {
    margin: 0;
  }

  /* fonts */
  body {
    color: ${({ theme }): string => theme.fg};
		font-family: Unna, sans-serif;
    background: ${({ theme }): string => theme.bg}
  }

   /* flex */
  .flex {
    display: flex;
  }
  .fxd-c {
    flex-direction: column;
  }
  .jc-c {
    justify-content: center;
  }
  .jc-s {
    justify-content: flex-start;
  }
  .jc-e {
    justify-content: flex-end;
  }
  .jc-sb {
    justify-content: space-between;
  }
  .jc-sa {
    justify-content: space-around;
  }
  .ai-c {
    align-items: center;
  }
  .fxw-n {
    flex-wrap: nowrap;
  }
  .fxw-w {
    flex-wrap: wrap;
  }

  .flex-1 {
    flex: 1;
  }
  .flex-2 {
    flex: 2;
  }
  .flex-3 {
    flex: 3;
  }
  .flex-auto {
    flex: auto;
  }
  .w100 {
    width: 100%;
  }
  .h100 {
    height: 100%;
  }

  /* font-size */
  .f12 {
    font-size: 12px;
  }
  .f14 {
    font-size: 14px;
  }
  .f16 {
    font-size: 16px;
  }
  .f31 {
    font-size: 31px;
  }

  .fw300 {
    font-weight: 300;
  }
  .fw400 {
    font-weight: 400;
  }
  .fw700 {
    font-weight: 700;
  }
  .fw900 {
    font-weight: 900;
  }

  /* Text */
  .ttu {
    text-transform: uppercase;
  }
  .tdn {
    text-decoration: none;
  }
  .ta-c {
    text-align: center;
  }
  /* margin/padding */
  .m0 {
    margin: 0;
  }
  .p0 {
    padding: 0;
  }
  /* display */
  .d {
    display: block;
  }

  /* position */
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .t0 {
    top: 0;
  }
  .l0 {
    left: 0;
  }
  .r0 {
    right: 0;
  }
  .b0 {
    bottom: 0;
  }

  /* img */
  .cover {
    object-fit: cover;
  }
  .z-1 {
    z-index: -1;
  }
  .z0 {
    z-index: 0;
  }
  .z1 {
    z-index: 1;
  }

  .pointer {
    cursor: pointer;
  }

  .visuallyHidden {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .sticky {
    position: sticky;
    top: 0;
  }

  .yt-lite {
      background-color: #000;
      position: relative;
      display: block;
      contain: content;
      background-position: center center;
      background-size: cover;
      cursor: pointer;
  }

  /* gradient */
  .yt-lite::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
      background-position: top;
      background-repeat: repeat-x;
      height: 60px;
      padding-bottom: 50px;
      width: 100%;
      transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  /* responsive iframe with a 16:9 aspect ratio
      thanks https://css-tricks.com/responsive-iframes/
  */
  .yt-lite::after {
      content: "";
      display: block;
      padding-bottom: calc(100% / (16 / 9));
  }
  .yt-lite > iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
  }

  /* play button */
  .yt-lite > .lty-playbtn {
      width: 70px;
      height: 46px;
      background-color: #212121;
      z-index: 1;
      opacity: 0.8;
      border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
      transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }
  .yt-lite:hover > .lty-playbtn {
      background-color: #f00;
      opacity: 1;
  }
  /* play button triangle */
  .yt-lite > .lty-playbtn:before {
      content: '';
      border-style: solid;
      border-width: 11px 0 11px 19px;
      border-color: transparent transparent transparent #fff;
  }

  .yt-lite > .lty-playbtn,
  .yt-lite > .lty-playbtn:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
  }

  /* Post-click styles */
  .yt-lite.lyt-activated {
      cursor: unset;
  }
  .yt-lite.lyt-activated::before,
  .yt-lite.lyt-activated > .lty-playbtn {
      opacity: 0;
      pointer-events: none;
  }

  .grecaptcha-badge {
    /* display: none; */
  }
`

export default _createGlobalStyle
