'use client';

import { useEffect } from 'react';
import { goatCounterEndpoint } from '../lib/analytics-config';

export default function SiteAnalytics() {
  useEffect(() => {
    if (!goatCounterEndpoint || window.location.hostname !== 'sunyubo23.github.io') return;
    // React StrictMode can run effects twice; load once to avoid duplicate views.
    if (document.getElementById('goatcounter-script')) return;

    const script = document.createElement('script');
    script.id = 'goatcounter-script';
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.setAttribute('data-goatcounter', goatCounterEndpoint);
    document.body.appendChild(script);
  }, []);

  return null;
}
