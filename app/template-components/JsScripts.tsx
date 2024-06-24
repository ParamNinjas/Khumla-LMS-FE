import Script from 'next/script';

const JsScripts = () => {
  return (
      <>
{/* <Script src="/assets/js/ss.js"></Script> */}
<Script src="/assets/vendor/jquery.min.js"></Script>

{/* <!-- Bootstrap --> */}
<Script src="/assets/vendor/popper.min.js"></Script>
<Script src="/assets/vendor/bootstrap.min.js"></Script>

{/* <!-- Perfect Scrollbar --> */}
<Script src="/assets/vendor/perfect-scrollbar.min.js"></Script>

{/* <!-- DOM Factory --> */}
<Script src="/assets/vendor/dom-factory.js"></Script>

{/* <!-- MDK --> */}
<Script src="/assets/vendor/material-design-kit.js"></Script>

{/* <!-- App JS --> */}
<Script src="/assets/js/app.js"></Script>

{/* <!-- Highlight.js --> */}
<Script src="/assets/js/hljs.js"></Script>

{/* <!-- Global Settings --> */}
<Script src="/assets/js/settings.js"></Script>

{/* <!-- Flatpickr --> */}
<Script src="/assets/vendor/flatpickr/flatpickr.min.js"></Script>
<Script src="/assets/js/flatpickr.js"></Script>

{/* <!-- Moment.js --> */}
<Script src="/assets/vendor/moment.min.js"></Script>
<Script src="/assets/vendor/moment-range.js"></Script>

{/* <!-- Chart.js --> */}
<Script src="/assets/vendor/Chart.min.js"></Script>
<Script src="/assets/js/chartjs.js"></Script>

{/* <!-- Chart.js Samples --> */}
<Script src="/assets/js/page.analytics-dashboard.js"></Script>

{/* <!-- Vector Maps --> */}
<Script src="/assets/vendor/jqvmap/jquery.vmap.min.js"></Script>
<Script src="/assets/vendor/jqvmap/maps/jquery.vmap.world.js"></Script>
<Script src="/assets/js/vector-maps.js"></Script>

{/* <!-- List.js --> */}
<Script src="/assets/vendor/list.min.js"></Script>
<Script src="/assets/js/list.js"></Script>

{/* <!-- Tables --> */}
<Script src="/assets/js/toggle-check-all.js"></Script>
<Script src="/assets/js/check-selected-row.js"></Script>

{/* <!-- App Settings (safe to remove) --> */}
<Script src="/assets/js/app-settings.js"></Script>
    </>
  )
}

export default JsScripts