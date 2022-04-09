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
    width: 100%;
  }

  .grecaptcha-badge {
    /* display: none; */
  }
`

export default _createGlobalStyle
