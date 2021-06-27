import { unref } from 'vue';

// NOTE water/use
import createAxios from '@@utils/use/axios';
import { getEnvConfig, isDevMode } from '@@utils/use/env';
import { error } from '@@utils/use/log';
import myStores from '@@utils/use/stores';

import { useMessage } from '@@utils/use/hooks/use-message';
// import { TOKEN_PREFIX } from '@@enums/cache';

const { createMessage, createErrorModal } = useMessage();

const ENV = getEnvConfig();

export default createAxios({
  apiUrl: ENV.VITE_API,
  isDevMode,
  errorLog: error,
  errorMsg: createMessage.error,
  errorModal: createErrorModal,
  transform: {
    transformRequestInner: () => {
      unref(myStores).dispatch('app/setPageLoading', false);
    },
    requestInterceptors: (config) => {
      // 请求之前处理config
      const token = 'authStore.getTokenState';
      if (token) {
        // jwt token
        config.headers.Authorization = `1${token}`;
      }
      return config;
    },
  }
});
