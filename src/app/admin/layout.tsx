'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './admin.module.css';

const navItems = [
  { name: 'General', path: '/admin/settings/general' },
  { name: 'Plan', path: '/admin/settings/plan' },
  { name: 'Billing', path: '/admin/settings/billing' },
  { name: 'Users', path: '/admin/settings/users' },
  { name: 'Payments', path: '/admin/settings/payments' },
  { name: 'Checkout', path: '/admin/settings/checkout' },
  { name: 'Customer accounts', path: '/admin/settings/customer-accounts' },
  { name: 'Shipping and delivery', path: '/admin/settings/shipping' },
  { name: 'Taxes and duties', path: '/admin/settings/taxes' },
  { name: 'Locations', path: '/admin/settings/locations' },
  { name: 'Markets', path: '/admin/settings/markets' },
  { name: 'Apps', path: '/admin/settings/apps' },
  { name: 'Sales channels', path: '/admin/settings/sales-channels' },
  { name: 'Domains', path: '/admin/settings/domains' },
  { name: 'Customer events', path: '/admin/settings/customer-events' },
  { name: 'Notifications', path: '/admin/settings/notifications' },
  { name: 'Metafields and metaobjects', path: '/admin/settings/metafields' },
  { name: 'Languages', path: '/admin/settings/languages' },
  { name: 'Customer privacy', path: '/admin/settings/privacy' },
  { name: 'Policies', path: '/admin/settings/policies' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.storeName}>
            <span className={styles.storeBadge}>ID</span>
            <div>
              IDFIS Store
              <div style={{ fontSize: '0.75rem', color: '#6d7175', fontWeight: 'normal' }}>idfis.com</div>
            </div>
          </div>
        </div>

        <div className={styles.searchBar}>
          🔍 Search
        </div>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path} 
                className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
