import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABILITY: Gravity & Time - Privacy Policy | RyuisLabs',
  description:
    'Global Privacy Policy for ABILITY: Gravity & Time (formerly Momenta) by RyuisLabs. Local-first immersion productivity application.',
};

export default function PrivacyPolicyMomentaPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.65',
      color: '#e0e0e0',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#000000',
    },
    title: {
      borderBottom: '2px solid #2196F3',
      paddingBottom: '12px',
      color: '#ffffff',
      fontSize: '2rem',
      marginBottom: '8px',
    },
    heading: {
      marginTop: '32px',
      marginBottom: '12px',
      color: '#2196F3',
      fontSize: '1.4rem',
    },
    text: {
      marginBottom: '15px',
      textAlign: 'justify',
    },
    lastUpdated: {
      color: '#868e96',
      fontStyle: 'italic',
      marginBottom: '24px',
      fontSize: '0.9rem',
    },
    list: {
      marginBottom: '16px',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      fontSize: '0.9rem',
    },
    th: {
      backgroundColor: '#161616',
      color: '#ffffff',
      border: '1px solid #333333',
      padding: '10px 12px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #333333',
      padding: '10px 12px',
      color: '#cccccc',
      verticalAlign: 'top',
    },
    contactBox: {
      backgroundColor: '#121212',
      padding: '20px 24px',
      borderRadius: '8px',
      marginTop: '36px',
      border: '1px solid #2a2a2a',
    },
    link: {
      color: '#64b5f6',
      textDecoration: 'underline',
    },
    footer: {
      marginTop: '32px',
      borderTop: '1px solid #222222',
      paddingTop: '20px',
      color: '#666666',
      fontSize: '0.85rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for ABILITY: Gravity &amp; Time</h1>
      <p style={styles.lastUpdated}>
        Last Updated: October 26, 2026 | Effective Date: October 26, 2026 (Previous: April 08, 2026)
      </p>

      <p style={styles.text}>
        <strong>RyuisLabs</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the{' '}
        <strong>ABILITY: Gravity &amp; Time</strong> (formerly known as <em>Momenta</em>) mobile
        application (the &quot;Service&quot;) for users worldwide. Your privacy is our top priority.
        This Privacy Policy explains how we handle, protect, and process your data in compliance
        with global privacy regulations, including the GDPR (EEA/UK), CCPA/CPRA (USA), COPPA, and
        PIPA (South Korea).
      </p>

      {/* 1. Information Collection and Use */}
      <h2 style={styles.heading}>1. Information Collection and Use</h2>
      <p style={styles.text}>
        <strong>ABILITY: Gravity &amp; Time</strong> is engineered as a{' '}
        <strong>local-first productivity tool</strong>.{' '}
        <strong>
          We do not operate central user databases, and we do not collect, store, or transmit your
          personal focus logs or usage statistics to our own external servers.
        </strong>
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Local Device Data:</strong> All core content created within the Service (Focus
          logs, Level progress, and App Settings) is stored exclusively on your device&apos;s local
          storage.
        </li>
        <li style={styles.listItem}>
          <strong>Optional Cloud Backup Data:</strong> If you explicitly enable Google Drive
          Synchronization, your app data is backed up directly to your personal Google Drive
          account.
        </li>
        <li style={styles.listItem}>
          <strong>Third-Party Advertising Data:</strong> To support free features, our integrated
          advertising partner (Google AdMob) may collect device identifiers and diagnostic telemetry
          as detailed in Section 3.
        </li>
      </ul>

      {/* 2. Google Drive Synchronization */}
      <h2 style={styles.heading}>2. Google Drive Synchronization (Optional)</h2>
      <p style={styles.text}>
        The Service provides an optional cloud backup and synchronization feature using the{' '}
        <strong>Google Drive API</strong>. This feature is disabled by default and is only activated
        upon your explicit consent and Google Sign-In:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Restricted Data Scope:</strong> The Service requests access strictly to the
          isolated &quot;Application Data Folder&quot; (<code>appDataFolder</code>) created by{' '}
          <strong>ABILITY: Gravity &amp; Time</strong> on your Google Drive. We cannot view,
          modify, or access any of your other personal files or folders.
        </li>
        <li style={styles.listItem}>
          <strong>Encrypted Transmission:</strong> Your focus data is transmitted directly between
          your device and Google&apos;s servers via encrypted channels (HTTPS/TLS).
        </li>
        <li style={styles.listItem}>
          <strong>Purpose:</strong> Used solely to keep your focus history and progress synchronized
          across your devices and to provide a user-controlled backup solution.
        </li>
        <li style={styles.listItem}>
          <strong>Google API Limited Use Disclosure:</strong> Our use and transfer to any other app
          of information received from Google APIs will adhere to the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </li>
      </ul>

      {/* 3. Third-Party Services & International Transfers */}
      <h2 style={styles.heading}>
        3. Third-Party Advertising &amp; International Data Transfers
      </h2>
      <p style={styles.text}>
        To provide the &quot;Energy Recharge&quot; feature for free, we use{' '}
        <strong>Google AdMob</strong>. When serving advertisements or synchronizing backups, data is
        processed by <strong>Google LLC</strong> on its global server infrastructure (including
        servers located in the United States and other countries outside your jurisdiction):
      </p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Service Provider</th>
            <th style={styles.th}>Data Processed</th>
            <th style={styles.th}>Purpose &amp; Legal Basis</th>
            <th style={styles.th}>Processing Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>
              <strong>Google LLC</strong> (Google AdMob)
            </td>
            <td style={styles.td}>
              Advertising ID (AAID/IDFA), coarse IP address, device model/OS version, ad interaction
              &amp; crash logs
            </td>
            <td style={styles.td}>
              Serving personalized or non-personalized ads, analytics, and fraud prevention (Consent
              / Legitimate Interest)
            </td>
            <td style={styles.td}>Global (including USA)</td>
          </tr>
          <tr>
            <td style={styles.td}>
              <strong>Google LLC</strong> (Google Drive API)
            </td>
            <td style={styles.td}>
              Google OAuth token, encrypted app backup files in <code>appDataFolder</code>
            </td>
            <td style={styles.td}>
              User-initiated cloud backup and multi-device synchronization (Explicit User Consent)
            </td>
            <td style={styles.td}>Global (including USA)</td>
          </tr>
        </tbody>
      </table>
      <p style={styles.text}>
        For more details on how Google handles data, please review the{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Google Privacy Policy
        </a>
        .
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>How to Opt-Out of Personalized Advertising:</strong> You can reset your
          advertising ID or opt out of personalized ads at any time via your device settings:
          <br />• <strong>Android:</strong> Settings &gt; Privacy &gt; Ads &gt; Reset advertising ID
          or Delete advertising ID.
          <br />• <strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking &gt;
          Disable &quot;Allow Apps to Request to Track&quot;.
        </li>
      </ul>

      {/* 4. App Permissions */}
      <h2 style={styles.heading}>4. App Permissions</h2>
      <p style={styles.text}>
        To ensure full functionality, <strong>ABILITY: Gravity &amp; Time</strong> may request the
        following permissions:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Notifications (Optional):</strong> Used to alert you when a focus session ends or
          when energy is fully recharged.
        </li>
        <li style={styles.listItem}>
          <strong>Identity / Accounts (Optional):</strong> Used strictly for Google Sign-In when you
          choose to activate the Google Drive synchronization feature.
        </li>
      </ul>

      {/* 5. Data Retention & Deletion */}
      <h2 style={styles.heading}>5. Data Retention and Deletion</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Local Data:</strong> Retained solely on your device. Uninstalling the Service or
          clearing the app storage in your device settings permanently deletes all local focus logs
          and progress immediately.
        </li>
        <li style={styles.listItem}>
          <strong>Google Drive Backup Data:</strong> Retained in your personal Google Drive until
          you delete the backup within the app or revoke access and delete application data via your{' '}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Google Account Permissions
          </a>
          .
        </li>
        <li style={styles.listItem}>
          <strong>Support Inquiries:</strong> If you contact us via email, your email address and
          correspondence are retained only as long as necessary to resolve your inquiry (up to 1
          year) and permanently deleted thereafter.
        </li>
      </ul>

      {/* 6. Global Privacy Rights */}
      <h2 style={styles.heading}>
        6. Your Global Privacy Rights (GDPR, CCPA/CPRA, PIPA &amp; International Laws)
      </h2>
      <p style={styles.text}>
        Depending on your jurisdiction (including the EEA, UK, Switzerland, California/USA, South
        Korea, and Brazil), you have the right to access, rectify, export, restrict, or erase your
        data, as well as the right to withdraw consent or opt out of targeted advertising:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Exercising Your Rights:</strong> Because we do not maintain central user accounts
          on our own servers, you can directly exercise your rights to erase data or withdraw
          consent at any time by clearing your local app storage, revoking Google Drive permissions,
          or resetting your device&apos;s Advertising ID.
        </li>
        <li style={styles.listItem}>
          <strong>California Residents (CCPA/CPRA):</strong> We do not sell your personal
          information for monetary value. You may opt out of third-party ad sharing via the device
          settings described in Section 3.
        </li>
      </ul>

      {/* 7. Children's Privacy */}
      <h2 style={styles.heading}>7. Children&apos;s Privacy (COPPA Compliance)</h2>
      <p style={styles.text}>
        <strong>ABILITY: Gravity &amp; Time</strong> is safe for users of all ages. Because core
        focus data is stored locally on your device, we do not knowingly collect personal
        information from children under the age of 13 (or under the applicable age of digital
        consent in your country, such as 14 or 16). Advertisements served via Google AdMob comply
        with Google&apos;s Families and Children policies. If you believe we have inadvertently
        received personal information from a child via support channels, please contact us so we can
        promptly delete it.
      </p>

      {/* 8. Changes to This Policy */}
      <h2 style={styles.heading}>8. Changes to This Privacy Policy</h2>
      <p style={styles.text}>
        We may update this Privacy Policy from time to time to reflect functional updates or
        regulatory changes. Any material changes will be posted on this page with an updated
        &quot;Effective Date&quot; at least 7 days prior to taking effect.
      </p>

      {/* 9. Contact Us */}
      <div style={styles.contactBox}>
        <h2 style={{ ...styles.heading, marginTop: 0 }}>9. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices worldwide, please contact the developer directly:
        </p>
        <p style={{ ...styles.text, marginBottom: '8px' }}>
          <strong>Developer / Studio:</strong> RyuisLabs
        </p>
        <p style={{ ...styles.text, marginBottom: '8px' }}>
          <strong>Owner &amp; Data Protection Contact:</strong> Yoonjong Ryu
        </p>
        <p style={{ ...styles.text, marginBottom: 0 }}>
          <strong>Email:</strong>{' '}
          <a href="mailto:content@ryuislabs.com" style={styles.link}>
            content@ryuislabs.com
          </a>
        </p>
      </div>

      <footer style={styles.footer}>
        <p>© 2026 RyuisLabs. All rights reserved.</p>
      </footer>
    </div>
  );
}