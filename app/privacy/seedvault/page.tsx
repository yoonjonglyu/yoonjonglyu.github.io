import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SeedVault - Privacy Policy | RyuisLabs',
  description:
    'Global Privacy Policy for SeedVault by RyuisLabs. 100% Zero-Knowledge, Serverless, and Offline-First cryptographic vault.',
};

export default function PrivacyPolicySeedVaultPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.65',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '40px 20px',
      backgroundColor: '#ffffff',
      color: '#222222',
    },
    title: {
      color: '#111111',
      fontSize: '28px',
      marginBottom: '8px',
      borderBottom: '2px solid #111111',
      paddingBottom: '12px',
    },
    meta: {
      color: '#666666',
      fontSize: '14px',
      fontStyle: 'italic',
      marginBottom: '24px',
    },
    heading: {
      color: '#111111',
      fontSize: '20px',
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
      borderTop: '1px solid #eeeeee',
      margin: '28px 0',
    },
    contactBox: {
      marginTop: '16px',
      backgroundColor: '#f6f6f6',
      padding: '18px 20px',
      borderRadius: '8px',
      border: '1px solid #e5e5e5',
    },
    link: {
      color: '#0055cc',
      textDecoration: 'underline',
    },
    footer: {
      color: '#888888',
      fontSize: '13px',
      marginTop: '32px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for SeedVault</h1>
      <p style={styles.meta}>
        Last Updated: October 26, 2026 | Effective Date: October 26, 2026
      </p>

      <p style={styles.text}>
        This Privacy Policy describes how <strong>RyuisLabs</strong> (&quot;we&quot;, &quot;our&quot;,
        or &quot;us&quot;) handles your information in the <strong>SeedVault</strong> mobile
        application (&quot;the App&quot; or &quot;the Service&quot;). SeedVault is engineered for
        users worldwide as a <strong>100% Zero-Knowledge, Serverless, and Offline-First application</strong>{' '}
        that guarantees complete data sovereignty and local cryptographic security.
      </p>

      <hr style={styles.divider} />

      {/* 1. Zero Collection */}
      <section>
        <h2 style={styles.heading}>1. Information Collection &amp; Usage (Zero Collection)</h2>
        <p style={styles.text}>
          SeedVault does not require account registration, and{' '}
          <strong>
            we do not collect, transmit, access, or store any personal data, encrypted payloads,
            master passwords, or seed phrases on remote servers.
          </strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Encrypted Local Storage:</strong> All secrets, recovery phrases, and text
            entries created within the App are stored exclusively on your device&apos;s local
            storage in an encrypted format.
          </li>
          <li style={styles.listItem}>
            <strong>No Server Infrastructure or Tracking:</strong> We do not operate backend servers,
            third-party advertising SDKs, behavioral tracking systems, or analytics databases.
          </li>
          <li style={styles.listItem}>
            <strong>Zero-Knowledge Architecture:</strong> We have no technical capability to access,
            view, recover, or decrypt your data. Because we never possess your encryption keys or
            master password, we cannot recover your vault if you lose your credentials.
          </li>
        </ul>
      </section>

      {/* 2. Purchase & Billing */}
      <section>
        <h2 style={styles.heading}>2. Purchases &amp; Payment Processing</h2>
        <p style={styles.text}>
          SeedVault is distributed globally as a paid application through official app marketplaces
          (such as Google Play).
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Third-Party Payment Processors:</strong> All transactions, billing, and license
            verifications are handled directly by the marketplace platform (e.g., Google Play
            Billing). RyuisLabs never collects, processes, or stores your credit card details, bank
            account numbers, or billing addresses.
          </li>
        </ul>
      </section>

      {/* 3. Device Permissions */}
      <section>
        <h2 style={styles.heading}>3. Device Permissions</h2>
        <p style={styles.text}>
          To provide core utility features, SeedVault may request the following permissions on your
          device only upon your explicit action:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Camera Permission (Optional):</strong> Required solely to scan QR codes
            containing Encrypted JSON payloads or plaintext secrets. The camera feed is processed
            locally in volatile memory (RAM) in real time and is never recorded, saved to persistent
            storage, or transmitted over any network.
          </li>
          <li style={styles.listItem}>
            <strong>Storage / File Access Permission (Optional):</strong> Used exclusively via your
            operating system&apos;s native file picker to export Encrypted JSON backup files or
            import existing vault backups from your local file system.
          </li>
        </ul>
      </section>

      {/* 4. Cryptographic Security */}
      <section>
        <h2 style={styles.heading}>4. Cryptographic Security Standards</h2>
        <p style={styles.text}>
          SeedVault employs industry-standard cryptographic primitives to secure your data at rest:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Authenticated Encryption:</strong> Utilizes AES-256-GCM symmetric encryption
            combined with Argon2id / PBKDF2 memory-hard key derivation functions (KDF) to defend
            against offline brute-force attacks.
          </li>
          <li style={styles.listItem}>
            <strong>Isolated Execution:</strong> All key derivation, encryption, and decryption
            operations execute strictly within your device&apos;s isolated memory.
          </li>
        </ul>
      </section>

      {/* 5. Data Retention, Deletion & Sharing */}
      <section>
        <h2 style={styles.heading}>5. Data Retention, Deletion &amp; Third-Party Sharing</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Local Vault Data:</strong> Since all vault data resides solely on your device,
            uninstalling the App, clearing the App&apos;s storage in your device settings, or
            executing the in-app &quot;Reset Vault&quot; function will permanently and irreversibly
            erase all stored data immediately.
          </li>
          <li style={styles.listItem}>
            <strong>Customer Support Inquiries:</strong> If you contact us directly via email for
            technical support, your email address and message contents are retained only as long as
            necessary to resolve your inquiry (up to 1 year) and are permanently deleted thereafter.
          </li>
          <li style={styles.listItem}>
            <strong>Zero Third-Party Sharing or Sale:</strong> We do not sell, rent, trade, or
            transfer any user data to third parties across any jurisdiction.
          </li>
        </ul>
      </section>

      {/* 6. Global Privacy Rights */}
      <section>
        <h2 style={styles.heading}>
          6. International Privacy Rights (GDPR, CCPA/CPRA, PIPA &amp; Global Laws)
        </h2>
        <p style={styles.text}>
          Regardless of your country of residence (including the European Economic Area, United
          Kingdom, United States, South Korea, Japan, and other regions), we respect your statutory
          data protection rights:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Right to Access, Portability, and Erasure:</strong> Because you retain 100%
            exclusive possession of your local data, you can directly access, export (as Encrypted
            JSON), modify, or permanently erase your data within the App at any time without
            submitting a request to us.
          </li>
          <li style={styles.listItem}>
            <strong>CCPA / CPRA Notice (California Residents):</strong> We do not &quot;sell&quot; or
            &quot;share&quot; personal information as defined under the California Consumer Privacy
            Act.
          </li>
          <li style={styles.listItem}>
            <strong>GDPR Legal Basis (EEA/UK Users):</strong> No personal data is processed on our
            servers. Any voluntary support correspondence is processed strictly under legitimate
            interest to respond to your request.
          </li>
        </ul>
      </section>

      {/* 7. Children's Privacy */}
      <section>
        <h2 style={styles.heading}>7. Children&apos;s Privacy (COPPA Compliance)</h2>
        <p style={styles.text}>
          We do not knowingly collect, solicit, or process personal information from anyone,
          including children under the age of 13 (or under the applicable age of digital consent in
          your jurisdiction, such as 14 or 16), in full compliance with the U.S. Children&apos;s
          Online Privacy Protection Act (COPPA) and international equivalents.
        </p>
      </section>

      {/* 8. Changes to This Policy */}
      <section>
        <h2 style={styles.heading}>8. Changes to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time to reflect architectural improvements
          or regulatory requirements. Any material updates will be published on this page with an
          updated Effective Date at least 7 days prior to taking effect.
        </p>
      </section>

      {/* 9. Contact Us */}
      <section>
        <h2 style={styles.heading}>9. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions, concerns, or inquiries regarding this Privacy Policy or
          SeedVault&apos;s security practices, please contact the developer directly:
        </p>
        <div style={styles.contactBox}>
          <p style={{ margin: '4px 0' }}>
            <strong>Developer / Studio:</strong> RyuisLabs
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Owner &amp; Data Protection Contact:</strong> Yoonjong Ryu
          </p>
          <p style={{ margin: '4px 0' }}>
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
          <strong>Addendum:</strong> This Privacy Policy is effective globally as of October 26,
          2026 (Previous version: September 17, 2026).
        </p>
        <p style={{ margin: '4px 0' }}>© 2026 RyuisLabs. All rights reserved.</p>
      </footer>
    </div>
  );
}