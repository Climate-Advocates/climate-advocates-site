// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      {/* <div style={styles.logoContainer}>
        <Image src="/images/Logo.png" alt="Logo" width={50} height={50} />
      </div> */}
      {/* Navigation Links */}
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/pages/about.tsx" style={styles.navLink}>
          Discussions
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/pages/contact.tsx" style={styles.navLink}>
          Articles
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/pages/contact.tsx" style={styles.navLink}>
          Waste Management
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/pages/contact.tsx" style={styles.navLink}>
          About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
    navbar: {
        backgroundColor: '#101010',
        padding: '10px',
        borderRadius: '0px 0px 5px 5px', // Rounded bottom corners
        boxShadow: '0px 3px 6px 0px #0C5042', // Shadow under the navbar
        height: '80px', // Adjust height if needed
        display: 'flex', // Flexbox for layout
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center', // Center items vertically
        gap: '20px', // Spacing between logo and links
      },
      logoContainer: {
        position: 'absolute', // Place logo separately from links
        left: '10px', // Position logo on the left
      },
      navList: {
        listStyleType: 'none',
        display: 'flex',
        gap: '56px', // Space between links
        margin: 0,
        padding: 0,
      },
      navItem: {
        margin: 0,
      },
      navLink: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
      },
    };
