const AppConfig = {
  site_name: 'Rice Store',
  title: 'Rice Store',
  description:
    'Rice Store is the worlds of largest NFT marketplace in Bitgert chain network.',
  locale: 'en',
  network: process.env.NEXT_PUBLIC_NETWORK,
  test_network: process.env.NEXT_PUBLIC_TEST_NETWORK,
  rpc_url: process.env.NEXT_PUBLIC_RPC_URL,
  test_rpc_url: process.env.NEXT_PUBLIC_TEST_RPC_URL,
  backend_url: process.env.NEXT_PUBLIC_BACKEND_URL,
};
export default AppConfig;
