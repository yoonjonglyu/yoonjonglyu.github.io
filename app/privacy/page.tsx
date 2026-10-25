import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RyuisLabs',
  description:
    'Global Master Privacy Policy for applications, web services, and software tools developed and operated by RyuisLabs.',
};

export default function PrivacyPolicyPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.65',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#f9f9f9',
      color: '#333333',
    },
    title: {
      color: '#222222',
      fontSize: '2rem',
      borderBottom: '2px solid #333333',
      paddingBottom: '12px',
      marginBottom: '8px',
    },
    lastUpdated: {
      color: '#666666',
      fontStyle: 'italic',
      marginBottom: '24px',
      fontSize: '0.9rem',
    },
    heading: {
      color: '#222222',
      fontSize: '1.35rem',
      marginTop: '32px',
      marginBottom: '12px',
    },
    text: {
      marginBottom: '14px',
      textAlign: 'justify',
    },
    list: {
      marginBottom: '16px',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
    divider: {
      border: '0',
      borderTop: '1px solid #dddddd',
      margin: '28px 0',
    },
    contactBox: {
      backgroundColor: '#ffffff',
      padding: '20px 24px',
      borderRadius: '8px',
      marginTop: '24px',
      border: '1px solid #e0e0e0',
    },
    link: {
      color: '#0055cc',
      textDecoration: 'underline',
    },
    footer: {
      color: '#777777',
      fontSize: '0.85rem',
      marginTop: '24px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Global Privacy Policy</h1>
      <p style={styles.lastUpdated}>
        Last Updated: October 26, 2026 | Effective Date: October 26, 2026 (Previous: January 29,
        2025)
      </p>

      <p style={styles.text}>
        This Global Privacy Policy explains how <strong>RyuisLabs</strong> (&quot;we,&quot;
        &quot;our,&quot; or &quot;us&quot;) collects, uses, protects, and handles your information
        across our mobile applications, web services, and software tools (collectively, the
        &quot;Services&quot;) available worldwide. We are committed to privacy-first engineering and
        full compliance with international data protection laws, including the GDPR (EEA/UK),
        CCPA/CPRA (USA), COPPA, and PIPA (South Korea).
      </p>

      <hr style={styles.divider} />

      {/* 1. Core Privacy Philosophy & Data Collection */}
      <section>
        <h2 style={styles.heading}>1. Information Collection and Purpose of Use</h2>
        <p style={styles.text}>
          Many of our Services are engineered on a <strong>Local-First</strong> or{' '}
          <strong>Zero-Knowledge</strong> architecture, meaning your personal content resides
          primarily on your own device. Depending on the specific Service and features you choose to
          use, we process data strictly for the following purposes:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Local Application Data:</strong> Content you create (such as notes, logs,
            settings, or encrypted vaults) is stored locally on your device to provide core
            functionality offline.
          </li>
          <li style={styles.listItem}>
            <strong>User Authentication &amp; Cloud Sync (Optional):</strong> When you explicitly
            choose to sign in via Google OAuth or enable cloud synchronization, we process your
            basic account identifiers (such as email address, profile name, or authentication token)
            and application data folders solely to authenticate your session and synchronize your
            data across devices.
          </li>
          <li style={styles.listItem}>
            <strong>On-Device Sensor &amp; Camera Processing (Where Applicable):</strong> Certain
            Services may request camera or sensor permissions (e.g., for QR code scanning or
            on-device vision verification). All sensory feeds are processed strictly in real time
            within your device&apos;s volatile memory (RAM) and are never recorded, saved to external
            servers, or shared.
          </li>
          <li style={styles.listItem}>
            <strong>Service Improvement &amp; Legal Compliance:</strong> To maintain system
            stability, respond to customer support inquiries, and comply with applicable legal
            obligations.
          </li>
        </ul>
      </section>

      {/* 2. Google API Services & Limited Use */}
      <section>
        <h2 style={styles.heading}>2. Google API Services &amp; Limited Use Disclosure</h2>
        <p style={styles.text}>
          When you choose to connect our Services with your Google Account, we may request access to
          specific Google API scopes based on your explicit consent:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Google Account Profile:</strong> Basic profile information (email address,
            display name, profile picture) used strictly for user authentication.
          </li>
          <li style={styles.listItem}>
            <strong>Google Drive / Calendar API Data (Optional):</strong> Access is restricted to
            isolated application data folders (<code>appDataFolder</code>) or specific resources you
            explicitly authorize to back up, synchronize, or manage your workflow. We do not access,
            view, or modify your unrelated personal files.
          </li>
          <li style={styles.listItem}>
            <strong>Google API Limited Use Compliance:</strong> RyuisLabs&apos; use and transfer to
            any other app of information received from Google APIs will adhere to the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. We never use Google user data for serving
            advertisements or training external AI models.
          </li>
        </ul>
      </section>

      {/* 3. Third-Party Services, Ads & Payments */}
      <section>
        <h2 style={styles.heading}>
          3. Third-Party Services, Advertising &amp; International Transfers
        </h2>
        <p style={styles.text}>
          We do not sell, rent, or trade your personal data to third parties. However, certain
          Services may integrate trusted third-party infrastructure providers (such as{' '}
          <strong>Google LLC</strong>), which may process technical data on global servers (including
          in the United States):
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Advertising (Free-Tier Apps with Google AdMob):</strong> In Services supported
            by advertisements, Google AdMob may collect your device&apos;s Advertising ID
            (AAID/IDFA), coarse IP address, device specifications, and ad interaction logs to serve
            and measure ads. You can opt out of personalized advertising at any time via your device
            settings (<em>Android: Settings &gt; Privacy &gt; Ads</em> /{' '}
            <em>iOS: Settings &gt; Privacy &amp; Security &gt; Tracking</em>).
          </li>
          <li style={styles.listItem}>
            <strong>Payments (Paid Apps &amp; In-App Purchases):</strong> All financial transactions
            are processed directly by official marketplace billing systems (such as Google Play
            Billing). We never collect, access, or store your credit card numbers or banking
            details.
          </li>
          <li style={styles.listItem}>
            <strong>Legal Requirements:</strong> We may disclose information only if required to do
            so by law or valid legal process.
          </li>
        </ul>
      </section>

      {/* 4. Data Retention and Deletion */}
      <section>
        <h2 style={styles.heading}>4. Data Retention and Deletion</h2>
        <p style={styles.text}>
          We retain data only for as long as necessary to fulfill the purposes outlined in this
          Policy:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Local Device Data:</strong> Retained on your device until you clear the
            app&apos;s storage, reset the in-app data, or uninstall the application.
          </li>
          <li style={styles.listItem}>
            <strong>Cloud Sync &amp; Authenticated Data:</strong> Retained in your linked cloud
            storage until you delete the data within the Service or revoke access via your{' '}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Google Account Permissions
            </a>
            . Upon explicit deletion request, any server-side session data is erased immediately.
          </li>
          <li style={styles.listItem}>
            <strong>Customer Support Records:</strong> Email inquiries are retained only as long as
            necessary to resolve your request (up to 1 year) and permanently deleted thereafter.
          </li>
        </ul>
      </section>

      {/* 5. Security Measures */}
      <section>
        <h2 style={styles.heading}>5. Data Security Measures</h2>
        <p style={styles.text}>
          We implement industry-standard technical and organizational safeguards to protect your
          information:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Encryption in Transit and at Rest:</strong> All network communications (including
            Google API transmissions) utilize HTTPS/TLS encryption. Sensitive local vaults employ
            authenticated cryptographic standards (such as AES-256-GCM).
          </li>
          <li style={styles.listItem}>
            <strong>Least-Privilege Access:</strong> Our applications request only the minimum
            device permissions and API scopes necessary to deliver the features you explicitly
            invoke.
          </li>
        </ul>
      </section>

      {/* 6. Global Privacy Rights */}
      <section>
        <h2 style={styles.heading}>
          6. Your Global Privacy Rights (GDPR, CCPA/CPRA, PIPA &amp; International Laws)
        </h2>
        <p style={styles.text}>
          Regardless of your location worldwide, you have the right to:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Access, Rectify, Export, or Erase Data:</strong> Request access to, correction
            of, portability of, or deletion of your personal data.
          </li>
          <li style={styles.listItem}>
            <strong>Restrict Processing &amp; Withdraw Consent:</strong> Revoke API permissions,
            disable cloud synchronization, or reset advertising identifiers at any time via your
            device or account settings.
          </li>
          <li style={styles.listItem}>
            <strong>CCPA/CPRA Non-Discrimination:</strong> California residents have the right to
            know what personal data is collected, opt out of third-party ad sharing, and not be
            discriminated against for exercising their privacy rights.
          </li>
        </ul>
      </section>

      {/* 7. Children's Privacy */}
      <section>
        <h2 style={styles.heading}>7. Children&apos;s Privacy (COPPA Compliance)</h2>
        <p style={styles.text}>
          We do not knowingly collect, solicit, or store personal information from children under
          the age of 13 (or under the applicable age of digital consent in your jurisdiction, such
          as 14 or 16). If we become aware that personal data from a child has been inadvertently
          submitted to us without parental consent, we will delete it immediately.
        </p>
      </section>

      {/* 8. Changes to This Policy */}
      <section>
        <h2 style={styles.heading}>8. Changes to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy periodically to reflect changes in our Services or global
          legal requirements. Any material changes will be posted on this page with an updated
          Effective Date at least 7 days prior to taking effect.
        </p>
      </section>

      {/* 9. Contact Us */}
      <section>
        <h2 style={styles.heading}>9. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions, concerns, or requests regarding this Privacy Policy or how your
          data is handled, please contact the developer directly:
        </p>
        <div style={styles.contactBox}>
          <p style={{ margin: '6px 0' }}>
            <strong>Developer / Studio:</strong> RyuisLabs
          </p>
          <p style={{ margin: '6px 0' }}>
            <strong>Owner &amp; Data Protection Contact:</strong> Yoonjong Ryu
          </p>
          <p style={{ margin: '6px 0' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:content@ryuislabs.com" style={styles.link}>
              content@ryuislabs.com
            </a>
          </p>
        </div>
      </section>

      <hr style={styles.divider} />

      <footer style={styles.footer}>
        <p style={{ margin: '4px 0' }}>
          <strong>Addendum:</strong> This Global Privacy Policy is effective as of October 26, 2026
          (Originally effective: January 29, 2025).
        </p>
        <p style={{ margin: '4px 0' }}>© 2026 RyuisLabs. All rights reserved.</p>
      </footer>
    </div>
  );
}