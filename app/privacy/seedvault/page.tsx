import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SeedVault - Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '30px 20px',
        backgroundColor: '#ffffff',
        color: '#222',
      }}
    >
      <h1 style={{ color: '#111', fontSize: '28px' }}>Privacy Policy for SeedVault</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Last updated: September 17, 2026 | Effective date: September 17, 2026
      </p>
      <p>
        This Privacy Policy describes how <strong>SeedVault</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) handles your data.
        SeedVault is designed as a <strong>100% Zero-Knowledge, Serverless, and Offline-First application</strong> that prioritizes complete data ownership and local security.
      </p>

      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '24px 0' }} />

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '20px' }}>1. Information Collection & Usage (Zero Collection)</h2>
        <p>
          SeedVault does not require any account registration, and <strong>we do not collect, transmit, or store any personal data, encrypted payloads, or seed phrases on remote servers.</strong>
        </p>
        <ul>
          <li><strong>Encrypted Local Data:</strong> All secrets, seed phrases, and text entries created within the App are stored solely on your device’s local storage using military-grade encryption.</li>
          <li><strong>No Server Infrastructure:</strong> We do not operate remote servers, tracking systems, or analytics databases. We have no technical capability to access or decrypt your data.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '20px' }}>2. Device Permissions</h2>
        <p>
          To provide core utility features, SeedVault may request the following device permissions with your explicit consent:
        </p>
        <ul>
          <li>
            <strong>Camera Permission:</strong> Required solely to scan QR codes containing Encrypted JSON payloads or plaintext secrets. The camera stream is processed locally in real time and is never recorded or transmitted.
          </li>
          <li>
            <strong>Storage / File Access Permission:</strong> Used exclusively to save exported Encrypted JSON files or import existing vault backups from your local file system.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '20px' }}>3. Data Retention, Deletion, and Third-Party Sharing</h2>
        <ul>
          <li><strong>Data Retention & Deletion:</strong> Since all data resides locally on your device, deleting the App or executing the &quot;Reset Vault&quot; option will permanently erase all stored data immediately.</li>
          <li><strong>Third-Party Sharing:</strong> We do not sell, trade, or transfer any user data to third parties, as no personal data is collected in the first place.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '20px' }}>4. Security Standards</h2>
        <p>
          SeedVault employs industry-standard cryptographic techniques to secure your data at rest:
        </p>
        <ul>
          <li><strong>Authenticated Encryption:</strong> Uses AES-256-GCM symmetric encryption combined with Argon2id / PBKDF2 memory-hard key derivation to protect against offline brute-force attacks.</li>
          <li><strong>Isolated Execution:</strong> Encryption and decryption processes take place entirely in your device&apos;s memory.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '20px' }}>5. Contact Us</h2>
        <p>
          If you have any questions or inquiries regarding this Privacy Policy or SeedVault&apos;s security practices, please contact us at:
        </p>
        <div style={{ marginTop: '10px', backgroundColor: '#f5f5f5', padding: '12px 16px', borderRadius: '6px' }}>
          <p style={{ margin: '4px 0' }}>
            <strong>Developer Email:</strong>{' '}
            <a href="mailto:yunjonglyu@gmail.com" style={{ color: '#0066cc' }}>
              yunjonglyu@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '20px' }}>6. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be published on this page with an updated effective date.
        </p>
      </section>

      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '24px 0' }} />

      <footer>
        <p style={{ color: '#888', fontSize: '13px' }}>
          <strong>Addendum:</strong> This Privacy Policy is effective as of September 17, 2026.
        </p>
      </footer>
    </div>
  );
}