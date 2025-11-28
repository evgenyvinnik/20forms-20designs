import { useState, useMemo, useCallback } from 'react';
import { LIBRARIES, FORMS, buildIframeSrc, type LibraryId, type FormId, type Library, type Form } from './config';

type ThemeMode = 'light' | 'dark';

interface IframeCellProps {
  libId: LibraryId;
  formId: FormId;
  theme: ThemeMode;
  isExpanded?: boolean;
}

const IframeCell = ({ libId, formId, theme, isExpanded = false }: IframeCellProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: isExpanded ? '600px' : '420px',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      {isLoading && !hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg-card)',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid var(--color-border)',
                borderTopColor: 'var(--color-accent)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
            Loading...
          </div>
        </div>
      )}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg-card)',
            color: 'var(--color-warning)',
            fontSize: '14px',
          }}
        >
          Failed to load form
        </div>
      )}
      <iframe
        title={`${libId}-${formId}`}
        src={buildIframeSrc(libId, formId, theme)}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
        sandbox="allow-scripts allow-forms allow-same-origin"
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

interface FilterPanelProps {
  selectedLibraries: Set<LibraryId>;
  selectedForms: Set<FormId>;
  onToggleLibrary: (id: LibraryId) => void;
  onToggleForm: (id: FormId) => void;
  onSelectAllLibraries: () => void;
  onSelectNoneLibraries: () => void;
  onSelectAllForms: () => void;
  onSelectNoneForms: () => void;
}

const FilterPanel = ({
  selectedLibraries,
  selectedForms,
  onToggleLibrary,
  onToggleForm,
  onSelectAllLibraries,
  onSelectNoneLibraries,
  onSelectAllForms,
  onSelectNoneForms,
}: FilterPanelProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '32px',
    }}
  >
    {/* Libraries Filter */}
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 style={{ fontSize: '16px', fontWeight: 600 }}>
          Libraries
          <span className="chip chip-accent" style={{ marginLeft: '8px' }}>
            {selectedLibraries.size}/{LIBRARIES.length}
          </span>
        </h3>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm" onClick={onSelectAllLibraries}>
            All
          </button>
          <button className="btn btn-ghost btn-sm" onClick={onSelectNoneLibraries}>
            None
          </button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        {LIBRARIES.map((lib) => (
          <label
            key={lib.id}
            className={`selectable ${selectedLibraries.has(lib.id) ? 'selected' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              fontSize: '13px',
            }}
          >
            <input
              type="checkbox"
              checked={selectedLibraries.has(lib.id)}
              onChange={() => onToggleLibrary(lib.id)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            <span style={{ flex: 1 }}>{lib.label}</span>
            {lib.supportsTheme && (
              <span className="chip" style={{ fontSize: '9px', padding: '2px 6px' }}>
                🌗
              </span>
            )}
          </label>
        ))}
      </div>
    </div>

    {/* Forms Filter */}
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 style={{ fontSize: '16px', fontWeight: 600 }}>
          Forms
          <span className="chip chip-accent" style={{ marginLeft: '8px' }}>
            {selectedForms.size}/{FORMS.length}
          </span>
        </h3>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm" onClick={onSelectAllForms}>
            All
          </button>
          <button className="btn btn-ghost btn-sm" onClick={onSelectNoneForms}>
            None
          </button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        {FORMS.map((form) => (
          <label
            key={form.id}
            className={`selectable ${selectedForms.has(form.id) ? 'selected' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              fontSize: '13px',
            }}
          >
            <input
              type="checkbox"
              checked={selectedForms.has(form.id)}
              onChange={() => onToggleForm(form.id)}
              style={{ accentColor: 'var(--color-accent)' }}
            />
            <span>{form.label}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

interface MatrixViewProps {
  libraries: Library[];
  forms: Form[];
  theme: ThemeMode;
}

const MatrixView = ({ libraries, forms, theme }: MatrixViewProps) => (
  <div style={{ overflowX: 'auto', paddingBottom: '24px' }}>
    <table
      style={{
        width: '100%',
        minWidth: `${400 + libraries.length * 380}px`,
        borderCollapse: 'separate',
        borderSpacing: '12px',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              width: '200px',
              padding: '16px',
              textAlign: 'left',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              position: 'sticky',
              left: 0,
              background: 'var(--color-bg-primary)',
              zIndex: 10,
            }}
          >
            Form / Library →
          </th>
          {libraries.map((lib) => (
            <th
              key={lib.id}
              style={{
                minWidth: '360px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600 }}>{lib.label}</span>
                <div className="flex gap-2" style={{ fontSize: '11px' }}>
                  <a href={lib.website} target="_blank" rel="noreferrer">
                    website
                  </a>
                  <span style={{ color: 'var(--color-border)' }}>•</span>
                  <a href={lib.repo} target="_blank" rel="noreferrer">
                    repo
                  </a>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {forms.map((form, formIndex) => (
          <tr
            key={form.id}
            className="animate-fade-in"
            style={{ animationDelay: `${formIndex * 0.03}s`, opacity: 0 }}
          >
            <td
              style={{
                padding: '16px',
                fontWeight: 500,
                fontSize: '14px',
                verticalAlign: 'top',
                position: 'sticky',
                left: 0,
                background: 'var(--color-bg-primary)',
                zIndex: 5,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--color-accent)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  {formIndex + 1}
                </span>
                {form.label}
              </div>
            </td>
            {libraries.map((lib) => (
              <td key={lib.id} style={{ padding: '8px', verticalAlign: 'top' }}>
                <IframeCell libId={lib.id} formId={form.id} theme={theme} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const App = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [selectedLibraries, setSelectedLibraries] = useState<Set<LibraryId>>(
    () => new Set(LIBRARIES.slice(0, 3).map((l) => l.id))
  );
  const [selectedForms, setSelectedForms] = useState<Set<FormId>>(
    () => new Set(FORMS.slice(0, 5).map((f) => f.id))
  );
  const [showFilters, setShowFilters] = useState(true);

  const toggleLibrary = useCallback((id: LibraryId) => {
    setSelectedLibraries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const toggleForm = useCallback((id: FormId) => {
    setSelectedForms((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const filteredLibraries = useMemo(
    () => LIBRARIES.filter((l) => selectedLibraries.has(l.id)),
    [selectedLibraries]
  );

  const filteredForms = useMemo(
    () => FORMS.filter((f) => selectedForms.has(f.id)),
    [selectedForms]
  );

  const totalCells = filteredLibraries.length * filteredForms.length;

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header
        style={{
          padding: '24px 32px',
          borderBottom: '1px solid var(--color-border)',
          background: 'rgba(15, 15, 35, 0.8)',
          backdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: '1800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #e4e4e7 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Form Library Comparison
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                marginTop: '4px',
              }}
            >
              Compare {LIBRARIES.length} libraries × {FORMS.length} forms with full CSS
              isolation
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="toggle-group">
              <button
                className={`toggle-item ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                ☀️ Light
              </button>
              <button
                className={`toggle-item ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                🌙 Dark
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              className={`btn ${showFilters ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setShowFilters((v) => !v)}
            >
              {showFilters ? '🔽' : '🔼'} Filters
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '32px', maxWidth: '1800px', margin: '0 auto' }}>
        {/* Filters */}
        {showFilters && (
          <FilterPanel
            selectedLibraries={selectedLibraries}
            selectedForms={selectedForms}
            onToggleLibrary={toggleLibrary}
            onToggleForm={toggleForm}
            onSelectAllLibraries={() =>
              setSelectedLibraries(new Set(LIBRARIES.map((l) => l.id)))
            }
            onSelectNoneLibraries={() => setSelectedLibraries(new Set())}
            onSelectAllForms={() => setSelectedForms(new Set(FORMS.map((f) => f.id)))}
            onSelectNoneForms={() => setSelectedForms(new Set())}
          />
        )}

        {/* Stats Bar */}
        <div
          className="flex items-center justify-between mb-6"
          style={{
            padding: '16px 20px',
            background: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div className="flex items-center gap-4">
            <span className="chip chip-accent">
              {filteredLibraries.length} libraries
            </span>
            <span className="chip chip-accent">{filteredForms.length} forms</span>
            <span className="chip">{totalCells} total comparisons</span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            Each cell is fully isolated in its own iframe — no CSS bleed!
          </div>
        </div>

        {/* Matrix */}
        {totalCells > 0 ? (
          <MatrixView libraries={filteredLibraries} forms={filteredForms} theme={theme} />
        ) : (
          <div
            style={{
              padding: '80px 40px',
              textAlign: 'center',
              color: 'var(--color-text-secondary)',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
              No forms to display
            </h2>
            <p>Select at least one library and one form from the filters above.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '24px 32px',
          borderTop: '1px solid var(--color-border)',
          textAlign: 'center',
          color: 'var(--color-text-secondary)',
          fontSize: '13px',
        }}
      >
        <p>
          Built to showcase form implementations across different React design systems.
          <br />
          <a
            href="https://github.com/evgenyvinnik/20forms-20designs"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: '8px', display: 'inline-block' }}
          >
            View on GitHub →
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

