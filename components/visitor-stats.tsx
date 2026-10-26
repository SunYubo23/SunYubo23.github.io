'use client';

import { useEffect, useState } from 'react';

export default function VisitorStats() {
  const [enabled, setEnabled] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Keep development and preview visits out of the public site's counts.
    setEnabled(window.location.hostname === 'sunyubo23.github.io');
  }, []);

  return (
    <p className="visitor-stats">
      {enabled && !failed ? (
        <a href="https://hits.sh/sunyubo23.github.io/" target="_blank" rel="noreferrer" title="Cumulative page visits since October 2026, powered by Hits">
          <img src="https://hits.sh/sunyubo23.github.io.svg?label=Visits&color=1674ba&labelColor=666666" alt="Cumulative homepage visits" height={20} onError={() => setFailed(true)} />
        </a>
      ) : <span title="Visit counts are available on the live site when the counting service is reachable">Visits: —</span>}
    </p>
  );
}
