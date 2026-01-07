import { isProd } from './constants'

const config = {
  RECAPTCHA_CLIENT_SIDE: isProd
    ? process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_SIDE || ''
    : '6LfztuQUAAAAAG_backUUhXb4b9FunPe_SXCD7zv',
}

export default config
