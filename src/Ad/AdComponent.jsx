import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    try {
      // This triggers the AdSense push to fill the div
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div style={{ overflow: 'hidden', textAlign: 'center' }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-8969626196229370"
           data-ad-slot="9889877271" // Replace with your actual Ad Slot ID
           data-ad-format="autorelaxed"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdComponent;