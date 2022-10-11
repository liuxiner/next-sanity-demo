import { renderApp } from './App';

export async function initialize(sku: string) {
  renderApp({ sku });
}
