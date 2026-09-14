type UploadPanelProps = {
  campaigns: { id: string; name: string }[];
};

export default function UploadPanel({ campaigns }: UploadPanelProps) {
  return (
    <section className="upload-panel">
      <h2>Subir fondo nuevo</h2>

      <form className="upload-form">
        <label>
          Título del fondo
          <input type="text" placeholder="Ej: Cyber Day 2026" />
        </label>

        <label>
          Campaña
          <select defaultValue="">
            <option value="" disabled>
              Selecciona una campaña
            </option>
            {campaigns.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Archivo de imagen
          <input type="file" accept="image/*" />
        </label>

        <button type="submit" className="primary-button">
          Guardar fondo
        </button>
      </form>
    </section>
  );
}
