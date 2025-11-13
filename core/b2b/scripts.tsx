export function B2BProductionScripts({ storeHash, channelId, token, environment }: Props) {
  useB2BAuth(token);

  return (
    <>
      <script>
        {`
          window.b3CheckoutConfig = {
            routes: {
              dashboard: '/account.php?action=order_status',
            },
          }
          window.B3 = {
            setting: {
              store_hash: '${storeHash}',  
              channel_id: ${channelId},
              platform: 'catalyst',
            },
            'dom.checkoutRegisterParentElement': '#checkout-app',
            'dom.registerElement': '[href^="/login.php"], #checkout-customer-login, [href="/login.php"] .navUser-item-loginLabel, #checkout-customer-returning .form-legend-container [href="#"]',
            'dom.openB3Checkout': 'checkout-customer-continue',
            before_login_goto_page: '/account.php?action=order_status',
            checkout_super_clear_session: 'true',
            'dom.navUserLoginElement': '.navUser-item.navUser-item--account',
          }
        `}
      </script>
      <script
        type="module"
        crossOrigin=''
        src="https://curious-zabaione-24f0e3.netlify.app/index.dp73zibi.js"
      ></script>
      <script
        crossOrigin=''
        src="https://curious-zabaione-24f0e3.netlify.app/polyfills-legacy.cq4i_elj.js"
      ></script>
      <script
        crossOrigin=''
        src="https://curious-zabaione-24f0e3.netlify.app/index-legacy.chjy8zio.js"
      ></script>
    </>
  );
}