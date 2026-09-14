import type { ZoomBackground } from '../data/mockData';

type PreviewPanelProps = {
  background: ZoomBackground | null;
  campaignName: string;
};

export default function PreviewPanel({ background, campaignName }: PreviewPanelProps) {
  if (!background) {
    return (
      <aside className="preview-panel empty">
        <p>Selecciona un fondo para previsualizarlo.</p>
      </aside>
    );
  }

  return (
    <aside className="preview-panel">
      <div className="preview-media">
        <img src={background.imageUrl} alt={background.title} />
      </div>

      <div className="preview-meta">
        <span className="chip">{campaignName}</span>
        <h2>{background.title}</h2>
        <p>Formato recomendado: {background.dimensions}</p>
        <a href={background.downloadUrl} download className="download-button">
          Descargar fondo
        </a>
      </div>
    </aside>
  );
}
