import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memo Privacy Policy',
};

export default function PrivacyPolicyMemoPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#fff',
    },
    title: {
      borderBottom: '2px solid #4dabf7',
      paddingBottom: '10px',
      color: '#212529',
      fontSize: '2rem',
    },
    heading: {
      marginTop: '30px',
      color: '#495057',
      fontSize: '1.5rem',
    },
    text: {
      marginBottom: '15px',
      textAlign: 'justify',
    },
    lastUpdated: {
      color: '#868e96',
      fontStyle: 'italic',
      marginBottom: '20px',
    },
    list: {
      marginBottom: '15px',
      paddingLeft: '20px',
    },
    contactBox: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '40px',
      border: '1px solid #dee2e6',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for MemoFlow</h1>
      <p style={styles.lastUpdated}>Last Updated: January 08, 2026</p>

      <p style={styles.text}>
        MemoFlow ("we," "our," or "us") operates the MemoFlow mobile application
        (the "Service"). Your privacy is our top priority, and this policy
        explains how we handle your data.
      </p>

      <h2 style={styles.heading}>1. Information Collection and Use</h2>
      <p style={styles.text}>
        MemoFlow is designed to be a local-first productivity tool.
        <strong>
          {' '}
          We do not collect, store, or transmit any of your personal data or
          notes to external servers.
        </strong>
        All content created within the app (Memos, To-Do lists, and Drafts) is
        stored exclusively on your device's local storage.
      </p>

      <h2 style={styles.heading}>2. Google Drive Synchronization (Optional)</h2>
      <p style={styles.text}>
        MemoFlow provides an optional synchronization feature using{' '}
        <strong>Google Drive API</strong>. If you choose to use this feature:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Data Access:</strong> The app requests access only to the
          specific "Application Data Folder" or files created by MemoFlow on
          your Google Drive. We cannot access your other personal files or
          folders.
        </li>
        <li>
          <strong>Data Transmission:</strong> Your encrypted memo data is
          transmitted directly between your device and Google's servers.
        </li>
        <li>
          <strong>Purpose:</strong> This data is used solely to keep your notes
          in sync across multiple devices (Android, Windows, Web).
        </li>
      </ul>

      <h2 style={styles.heading}>3. App Permissions</h2>
      <p style={styles.text}>
        To provide full functionality, MemoFlow may request the following
        permissions:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>Storage/Filesystem:</strong> Used to export your notes into
          HTML, Markdown, or JSON files and to save them to your device.
        </li>
        <li>
          <strong>Identity/Accounts:</strong> (Optional) Used for Google Login
          to facilitate the Google Drive sync feature.
        </li>
      </ul>

      <h2 style={styles.heading}>4. Data Retention and Deletion</h2>
      <p style={styles.text}>
        Since your data is stored locally or on your own Google Drive, we do not
        have access to it. Deleting the app will remove all locally stored
        content. For data synced to Google Drive, you can manage or delete it at
        any time through the app's settings or your Google Account.
      </p>

      <h2 style={styles.heading}>5. Children's Privacy</h2>
      <p style={styles.text}>
        Our Service is intended for a general audience and is{' '}
        <strong>safe for users of all ages</strong>. Because MemoFlow does not
        collect, store, or share any personal information, it is fully compliant
        with global children’s privacy protection standards. We do not knowingly
        collect any personal data from children under the age of 13.
      </p>

      <h2 style={styles.heading}>6. Third-Party Services</h2>
      <p style={styles.text}>
        We do not share, sell, or trade your data with any third parties.
        MemoFlow does not contain third-party analytics, tracking tools, or
        advertisements that monitor your behavior.
      </p>

      <h2 style={styles.heading}>7. Changes to This Policy</h2>
      <p style={styles.text}>
        We may update our Privacy Policy from time to time. Any changes will be
        posted on this page with an updated "Last Updated" date.
      </p>

      <div style={styles.contactBox}>
        <h2 style={{ ...styles.heading, marginTop: 0 }}>7. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at:
        </p>
        <p style={styles.text}>
          <strong>Email:</strong> yunjonglyu@gmail.com
        </p>
      </div>
    </div>
  );
}
