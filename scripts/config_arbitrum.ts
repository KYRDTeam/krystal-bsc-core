import {commonPlatformWallets, IConfig} from './config_utils';

export const ArbitrumConfig: Record<string, IConfig> = {
  arbitrum_mainnet: {
    diabledFetchAaveDataWrapper: true,
    autoVerifyContract: true,

    tokens: {},

    wNative: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    uniswap: {
      routers: {
        sushiswap: {
          address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
        },
      },
    },

    kyberSwapV2: {
      router: '0xdf1a1b60f2d438842916c0adc43748768353ec25',
      aggregationExecutor: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
    },

    supportedWallets: commonPlatformWallets,
    nativeUsdRate: 2500,
  },
  arbitrum_rinkeby: {
    diabledFetchAaveDataWrapper: true,
    autoVerifyContract: true,

    tokens: {},

    wNative: '0x267dc5f342e139b5E407684e3A731aeaE8A71E3e',

    uniswap: {
      routers: {
        sushiswap: {
          address: '0x2036e188b5fB51a86E6dCf6744c0215a862567C8',
        },
      },
    },

    supportedWallets: commonPlatformWallets,
    nativeUsdRate: 2500,
  },
};
