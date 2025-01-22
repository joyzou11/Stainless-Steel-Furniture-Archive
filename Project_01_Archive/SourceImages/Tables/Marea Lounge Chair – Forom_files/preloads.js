
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.Bvnj2aN0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.CDCAg-oF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.DFGs4Qee.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.DTKbQBeM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.BlVm3EgX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/AmazonPayPCIButton.DllO83sZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayCaptcha.D0r6NYod.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/CheckoutAsGuest.DccyGQ0M.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useRefEffect.BtoQl3xS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.00OzM3l5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.Bg1KiSTS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.D-GyC_B1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.GXi9-IFN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.B1TaJKKy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification.CY2eVekB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.CajT4h3g.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/GooglePayPCIButton.BpJ9XdEN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useInstallmentsErrorHandler.D6YI6DVK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.Bz9AKmRN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.OmyLiuMU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.DAExtQDC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions._LMp-dNn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.DpyhGZh6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.Dd-vKm-6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.BtTtIMMe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGetBuyWithPrimeCheckoutSessionId.B50FNXon.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.BYkyUTuG.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.BtDbFeTa.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LegacyVaultedShippingMethods.Bp61D3vS.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DcFEH8PJ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayCaptcha.CUoq2pCx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/CheckoutAsGuest.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.mj3hAev9.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0356/2795/8403/files/Logo_HD_Dark_Brown__512_x_102_x320.png?v=1693028236"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  