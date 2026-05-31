import styles from '../../admin.module.css';

export default function GeneralSettings() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>General</h1>
      </div>

      <div className={styles.settingsCard}>
        <h2 className={styles.cardTitle}>Business details</h2>
        <p className={styles.cardSubtitle}>Business entity used for financial products, markets, apps, and taxes in this shop</p>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Legal business name</label>
            <input type="text" className={styles.input} defaultValue="IDFIS" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Country/region</label>
            <input type="text" className={styles.input} defaultValue="India" disabled />
          </div>
        </div>
      </div>

      <div className={styles.settingsCard}>
        <h2 className={styles.cardTitle}>Store contact details</h2>
        
        <div className={styles.formRow} style={{ marginTop: '1rem' }}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Store name</label>
            <input type="text" className={styles.input} defaultValue="IDFIS Store" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Store contact email</label>
            <input type="email" className={styles.input} defaultValue="admin@idfis.com" />
          </div>
        </div>
      </div>

      <div className={styles.settingsCard}>
        <h2 className={styles.cardTitle}>Store defaults</h2>
        
        <div className={styles.formRow} style={{ marginTop: '1rem' }}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Currency display</label>
            <select className={styles.input} defaultValue="INR">
              <option value="INR">Indian Rupee (INR ₹)</option>
              <option value="USD">US Dollar (USD $)</option>
            </select>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Backup Region</label>
            <select className={styles.input} defaultValue="India">
              <option value="India">India</option>
              <option value="Global">Global</option>
            </select>
            <p style={{ fontSize: '0.75rem', color: '#6d7175', marginTop: '0.25rem' }}>
              Determines settings for customers outside of your markets
            </p>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Unit system</label>
            <select className={styles.input} defaultValue="metric">
              <option value="metric">Metric system</option>
              <option value="imperial">Imperial system</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Default weight unit</label>
            <select className={styles.input} defaultValue="kg">
              <option value="kg">Kilogram (kg)</option>
              <option value="g">Gram (g)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <button style={{ 
          background: '#008060', 
          color: 'white', 
          border: 'none', 
          padding: '0.75rem 1.5rem', 
          borderRadius: '4px', 
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          Save
        </button>
      </div>
    </div>
  );
}
