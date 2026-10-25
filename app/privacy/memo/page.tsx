import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MemoFlow - Privacy Policy | RyuisLabs',
  description:
    'Global Privacy Policy for MemoFlow by RyuisLabs. Local-first, ad-free, and privacy-focused note-taking productivity tool.',
};

export default function PrivacyPolicyMemoPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.65',
      color: '#333333',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#ffffff',
    },
    title: {
      borderBottom: '2px solid #4dabf7',
      paddingBottom: '12px',
      color: '#212529',
      fontSize: '2rem',
      marginBottom: '8px',
    },
    heading: {
      marginTop: '32px',
      marginBottom: '12px',
      color: '#343a40',
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
    contactBox: {
      backgroundColor: '#f8f9fa',
      padding: '20px 24px',
      borderRadius: '8px',
      marginTop: '36px',
      border: '1px solid #dee2e6',
    },
    link: {
      color: '#1c7ed6',
      textDecoration: 'underline',
    },
    footer: {
      marginTop: '32px',
      borderTop: '1px solid #e9ecef',
      paddingTop: '20px',
      color: '#868e96',
      fontSize: '0.85rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for MemoFlow</h1>
      <p style={styles.lastUpdated}>
        Last Updated: October 26, 2026 | Effective Date: October 26, 2026 (Previous: January 08,
        2026)
      </p>

      <p style={styles.text}>
        <strong>RyuisLabs</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the{' '}
        <strong>MemoFlow</strong> application across mobile, desktop, and web platforms (the
        &quot;Service&quot;) for users worldwide. Your privacy is our top priority. This Privacy
        Policy explains how we handle, protect, and process your data in compliance with global
        privacy regulations, including the GDPR (EEA/UK), CCPA/CPRA (USA), COPPA, and PIPA (South
        Korea).
      </p>

      {/* 1. Information Collection and Use */}
      <h2 style={styles.heading}>1. Information Collection and Use (Local-First Architecture)</h2>
      <p style={styles.text}>
        <strong>MemoFlow</strong> is engineered strictly as a{' '}
        <strong>local-first productivity tool</strong>.{' '}
        <strong>
          We do not operate central user databases, and we do not collect, store, access, or
          transmit any of your personal data, memos, or notes to our own external servers.
        </strong>
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Local Device Storage:</strong> All content created within the Service (Memos,
          To-Do lists, Drafts, and Settings) is stored exclusively on your device&apos;s local
          storage.
        </li>
        <li style={styles.listItem}>
          <strong>Local Data Export (HTML, Markdown, JSON):</strong> You can export your notes into
          HTML, Markdown, or JSON files at any time. The generation and saving of these files occur
          entirely on your local device.
        </li>
      </ul>

      {/* 2. Google Drive Synchronization */}
      <h2 style={styles.heading}>2. Google Drive Synchronization (Optional)</h2>
      <p style={styles.text}>
        <strong>MemoFlow</strong> provides an optional cloud backup and synchronization feature
        using the <strong>Google Drive API</strong>. This feature is disabled by default and is only
        activated if you explicitly choose to sign in with your Google Account:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Restricted Data Access:</strong> The Service requests access strictly to the
          isolated &quot;Application Data Folder&quot; (<code>appDataFolder</code>) or specific
          sync files created by <strong>MemoFlow</strong> on your Google Drive. We cannot view,
          access, or modify any other personal files or folders in your Google Drive.
        </li>
        <li style={styles.listItem}>
          <strong>Direct Encrypted Transmission:</strong> Your encrypted memo data is transmitted
          directly between your device and Google&apos;s global servers (operated by Google LLC,
          including in the United States) via encrypted channels (HTTPS/TLS). No data ever passes
          through our infrastructure.
        </li>
        <li style={styles.listItem}>
          <strong>Purpose:</strong> Used solely to keep your notes synchronized across multiple
          devices (Android, Windows, Web) and to provide a user-controlled backup solution.
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

      {/* 3. App Permissions */}
      <h2 style={styles.heading}>3. App Permissions</h2>
      <p style={styles.text}>
        To provide full functionality, <strong>MemoFlow</strong> may request the following
        permissions upon your explicit action:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Storage / Filesystem (Optional):</strong> Used exclusively to export your notes
          into HTML, Markdown, or JSON files and save them to your device, or to import existing
          backup files.
        </li>
        <li style={styles.listItem}>
          <strong>Identity / Accounts (Optional):</strong> Used strictly for Google Sign-In when you
          choose to enable the Google Drive synchronization feature.
        </li>
      </ul>

      {/* 4. Third-Party Services & No Tracking */}
      <h2 style={styles.heading}>4. Third-Party Services (Ad-Free &amp; Tracker-Free)</h2>
      <p style={styles.text}>
        We do not sell, rent, share, or trade your data with any third parties.{' '}
        <strong>
          MemoFlow does not contain any third-party advertising SDKs, behavioral tracking tools, or
          analytics databases
        </strong>{' '}
        that monitor your activity. The only external service optionally utilized is Google Drive
        (governed by the{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Google Privacy Policy
        </a>
        ) when explicitly enabled by you for cloud synchronization.
      </p>

      {/* 5. Data Retention and Deletion */}
      <h2 style={styles.heading}>5. Data Retention and Deletion</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Local Data:</strong> Since your data is stored locally on your device, we have no
          access to it. Uninstalling the app or clearing the app&apos;s storage in your device
          settings will permanently erase all locally stored content immediately.
        </li>
        <li style={styles.listItem}>
          <strong>Google Drive Sync Data:</strong> Retained in your personal Google Drive until you
          delete it through the app&apos;s settings or revoke access via your{' '}
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
        Regardless of your country of residence (including the EEA, UK, United States, South Korea,
        and other jurisdictions), you hold complete ownership and control over your data:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Right to Access, Portability, and Erasure:</strong> Because we do not maintain
          central user accounts on our servers, you can directly exercise your rights to access,
          export (via HTML, Markdown, or JSON), modify, or permanently delete your data within the
          Service at any time without contacting us.
        </li>
        <li style={styles.listItem}>
          <strong>CCPA / CPRA Notice (California Residents):</strong> We do not &quot;sell&quot; or
          &quot;share&quot; personal information as defined under the California Consumer Privacy
          Act.
        </li>
      </ul>

      {/* 7. Children's Privacy */}
      <h2 style={styles.heading}>7. Children&apos;s Privacy (COPPA Compliance)</h2>
      <p style={styles.text}>
        Our Service is intended for a general audience and is{' '}
        <strong>safe for users of all ages</strong>. Because <strong>MemoFlow</strong> does not
        collect, store, or share any personal information on external servers and contains no
        advertisements, it is fully compliant with global children&apos;s privacy protection
        standards, including the U.S. Children&apos;s Online Privacy Protection Act (COPPA). We do
        not knowingly collect personal data from children under the age of 13 (or under the
        applicable age of digital consent in your jurisdiction).
      </p>

      {/* 8. Changes to This Policy */}
      <h2 style={styles.heading}>8. Changes to This Privacy Policy</h2>
      <p style={styles.text}>
        We may update our Privacy Policy from time to time to reflect functional updates or
        regulatory changes. Any material changes will be posted on this page with an updated
        &quot;Effective Date&quot; at least 7 days prior to taking effect.
      </p>

      {/* 9. Contact Us */}
      <div style={styles.contactBox}>
        <h2 style={{ ...styles.heading, marginTop: 0 }}>9. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions, concerns, or suggestions regarding this Privacy Policy or our
          data practices worldwide, please contact the developer directly:
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