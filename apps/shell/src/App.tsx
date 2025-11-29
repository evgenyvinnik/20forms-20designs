import { useState, useMemo } from 'react';
import { LIBRARIES, FORMS, buildIframeSrc } from './config';

// Minimal inline styles - matching original approach
const styles = {
  page: {
    padding: '24px',
    color: '#1f2933',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    margin: '0 0 8px',
  },
  subtitle: {
    margin: 0,
    maxWidth: '760px',
    lineHeight: 1.4,
  },
  selectorRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    columnGap: '64px',
    rowGap: '24px',
    alignItems: 'start',
  },
  themeToggleRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginTop: '24px',
    marginBottom: '4px',
  },
  previewToggleRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginTop: '8px',
    marginBottom: '-12px',
  },
  toggleLabel: {
    fontWeight: 600,
  },
  radioRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
  },
  sectionHeader: {
    marginBottom: '6px',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.1rem',
  },
  selectionActions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
    marginBottom: '12px',
    alignItems: 'center',
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
  },
  twoColumnList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '8px 12px',
  },
  singleColumnList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  previewSection: {
    marginTop: '32px',
  },
  previewStrip: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '16px',
    padding: '6px 2px 12px',
  },
  previewCard: {
    width: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  previewCardHeader: {
    padding: '8px 12px',
    background: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    fontSize: '0.85rem',
  },
  iframe: {
    width: '100%',
    height: '450px',
    border: 'none',
  },
  sectionHeaderRow: {
    marginBottom: '8px',
  },
};

type ThemeMode = 'light' | 'dark';
type GroupBy = 'library' | 'form';

// Simple checkbox row component
function CheckboxRow({ 
  label, 
  checked, 
  onChange, 
  disabled = false 
}: { 
  label: React.ReactNode; 
  checked: boolean; 
  onChange: () => void; 
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <div style={{ ...styles.checkboxRow, opacity: 0.5 }}>
        <span style={{ marginLeft: '22px' }}>{label}</span>
      </div>
    );
  }

  return (
    <label style={styles.checkboxRow}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

// Selection column component
function SelectionColumn({
  title,
  items,
  selectedItems,
  onToggleItem,
  onSelectAll,
  onSelectNone,
  twoColumnLayout = false,
}: {
  title: string;
  items: { value: string; label: React.ReactNode; disabled?: boolean }[];
  selectedItems: string[];
  onToggleItem: (value: string) => void;
  onSelectAll: () => void;
  onSelectNone: () => void;
  twoColumnLayout?: boolean;
}) {
  const selectableItems = items.filter((item) => !item.disabled);
  const allSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedItems.includes(item.value));
  const noneSelected = selectableItems.every(
    (item) => !selectedItems.includes(item.value)
  );
  const listStyle = twoColumnLayout ? styles.twoColumnList : styles.singleColumnList;

  return (
    <section>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>{title}</h2>
      </div>
      <div style={styles.selectionActions}>
        <CheckboxRow label="Select all" checked={allSelected} onChange={onSelectAll} />
        <CheckboxRow label="Select none" checked={noneSelected} onChange={onSelectNone} />
      </div>
      <div style={listStyle}>
        {items.map((item) => (
          <CheckboxRow
            key={item.value}
            label={item.label}
            checked={selectedItems.includes(item.value)}
            onChange={() => onToggleItem(item.value)}
            disabled={item.disabled}
          />
        ))}
      </div>
    </section>
  );
}

// Preview card with iframe (loads on demand)
function PreviewCard({ 
  libraryName, 
  formName,
  theme 
}: { 
  libraryName: string;
  formName: string;
  theme: ThemeMode;
}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const iframeSrc = buildIframeSrc(libraryName, formName, theme);

  // Load iframe when card becomes visible (simple intersection observer could be added)
  // For now, load on first render or on click
  const handleLoadClick = () => setShouldLoad(true);

  if (!iframeSrc) {
    return null;
  }

  return (
    <div style={styles.previewCard}>
      <div style={styles.previewCardHeader}>
        <strong>{formName}</strong> — {libraryName}
      </div>
      {!shouldLoad ? (
        <div 
          style={{ 
            ...styles.iframe, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#fafafa',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '8px',
          }}
          onClick={handleLoadClick}
        >
          <span style={{ fontSize: '32px' }}>▶️</span>
          <span style={{ color: '#666', fontSize: '14px' }}>Click to load preview</span>
        </div>
      ) : (
        <iframe
          title={`${libraryName}-${formName}`}
          src={iframeSrc}
          style={styles.iframe}
          sandbox="allow-scripts allow-forms allow-same-origin"
        />
      )}
    </div>
  );
}

// Preview section header
function PreviewSectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div style={styles.sectionHeaderRow}>
      <h3 style={{ margin: '0 0 4px' }}>{title}</h3>
      {description && <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{description}</p>}
    </div>
  );
}

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [groupBy, setGroupBy] = useState<GroupBy>('library');
  const [selectedForms, setSelectedForms] = useState<string[]>(() => FORMS.slice(0, 3));
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>(() => 
    LIBRARIES.filter(lib => lib.implemented).slice(0, 3).map(lib => lib.name)
  );

  // Form items for selection
  const formItems = useMemo(
    () => FORMS.map((form) => ({ value: form, label: form })),
    []
  );

  // Library items for selection (with website/repo links, disabled for non-implemented)
  const libraryItems = useMemo(
    () =>
      LIBRARIES.map((lib) => ({
        value: lib.name,
        label: (
          <span>
            {lib.name} (
            <a href={lib.website} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              website
            </a>
            {' / '}
            <a href={lib.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              repo
            </a>
            )
          </span>
        ),
        disabled: !lib.implemented,
      })),
    []
  );

  const toggleFormSelection = (form: string) => {
    setSelectedForms((prev) =>
      prev.includes(form) ? prev.filter((f) => f !== form) : [...prev, form]
    );
  };

  const toggleLibrarySelection = (lib: string) => {
    setSelectedLibraries((prev) =>
      prev.includes(lib) ? prev.filter((l) => l !== lib) : [...prev, lib]
    );
  };

  // Get active (selected AND implemented) libraries
  const activeLibraries = useMemo(
    () => LIBRARIES.filter(lib => lib.implemented && selectedLibraries.includes(lib.name)),
    [selectedLibraries]
  );

  // Get forms that the selected libraries have (all forms since all are implemented)
  const activeForms = useMemo(
    () => FORMS.filter(form => selectedForms.includes(form)),
    [selectedForms]
  );

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>20 Forms, 20 Designs</h1>
        <p style={styles.subtitle}>
          Choose a form and a component library to see the pairing. Each preview is 
          rendered in an isolated iframe for complete CSS isolation between libraries.
        </p>
      </header>

      <main>
        <div style={styles.selectorRow}>
          <SelectionColumn
            title="Forms"
            items={formItems}
            selectedItems={selectedForms}
            onToggleItem={toggleFormSelection}
            onSelectAll={() => setSelectedForms(formItems.map((item) => item.value))}
            onSelectNone={() => setSelectedForms([])}
          />
          <SelectionColumn
            title="Component libraries"
            items={libraryItems}
            selectedItems={selectedLibraries}
            onToggleItem={toggleLibrarySelection}
            onSelectAll={() => setSelectedLibraries(
              libraryItems.filter((item) => !item.disabled).map((item) => item.value)
            )}
            onSelectNone={() => setSelectedLibraries([])}
            twoColumnLayout
          />
        </div>

        <div style={styles.themeToggleRow}>
          <span style={styles.toggleLabel}>Theme:</span>
          <label style={styles.radioRow}>
            <input
              type="radio"
              name="preview-theme"
              value="light"
              checked={themeMode === 'light'}
              onChange={() => setThemeMode('light')}
            />
            <span>Light theme</span>
          </label>
          <label style={styles.radioRow}>
            <input
              type="radio"
              name="preview-theme"
              value="dark"
              checked={themeMode === 'dark'}
              onChange={() => setThemeMode('dark')}
            />
            <span>Dark theme</span>
          </label>
        </div>

        <div style={styles.previewToggleRow}>
          <span style={styles.toggleLabel}>Group previews by:</span>
          <label style={styles.radioRow}>
            <input
              type="radio"
              name="preview-group-by"
              value="library"
              checked={groupBy === 'library'}
              onChange={() => setGroupBy('library')}
            />
            <span>Design system</span>
          </label>
          <label style={styles.radioRow}>
            <input
              type="radio"
              name="preview-group-by"
              value="form"
              checked={groupBy === 'form'}
              onChange={() => setGroupBy('form')}
            />
            <span>Form name</span>
          </label>
        </div>

        {/* Previews grouped by library */}
        {groupBy === 'library' && activeLibraries.map((lib) => {
          const formsForLibrary = activeForms;
          if (formsForLibrary.length === 0) return null;
          
          return (
            <section key={lib.name} style={styles.previewSection}>
              <PreviewSectionHeader 
                title={`${lib.name} previews`}
                description={`${lib.name} form implementations.`}
              />
              <div style={styles.previewStrip}>
                {formsForLibrary.map((form) => (
                  <PreviewCard
                    key={`${lib.name}-${form}`}
                    libraryName={lib.name}
                    formName={form}
                    theme={themeMode}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Previews grouped by form */}
        {groupBy === 'form' && activeForms.map((form) => {
          if (activeLibraries.length === 0) return null;
          
          return (
            <section key={form} style={styles.previewSection}>
              <PreviewSectionHeader 
                title={form}
                description={`Compare this form across different design systems.`}
              />
              <div style={styles.previewStrip}>
                {activeLibraries.map((lib) => (
                  <PreviewCard
                    key={`${lib.name}-${form}`}
                    libraryName={lib.name}
                    formName={form}
                    theme={themeMode}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {activeLibraries.length === 0 && (
          <p style={{ marginTop: '32px', color: '#666' }}>
            Select at least one implemented library to see previews.
          </p>
        )}

        {activeForms.length === 0 && activeLibraries.length > 0 && (
          <p style={{ marginTop: '32px', color: '#666' }}>
            Select at least one form to see previews.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
