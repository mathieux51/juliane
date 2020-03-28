import getConfig from 'next/config'
import { isProd } from './constants'

const { publicRuntimeConfig } = getConfig()

const config = {
  RECAPTCHA_CLIENT_SIDE: isProd
    ? publicRuntimeConfig.RECAPTCHA_CLIENT_SIDE
    : '6LfztuQUAAAAAG_backUUhXb4b9FunPe_SXCD7zv'
}

export default config
