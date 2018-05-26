import { baseURL } from './baseurl';

export function RestangularConfigFactory(provider) {
  provider.setBaseUrl(baseURL);
}