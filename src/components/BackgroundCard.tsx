import type { ZoomBackground } from '../data/mockData';

type BackgroundCardProps = {
  background: ZoomBackground;
  campaignName: string;
  onSelect: (background: ZoomBackground) => void;
};

export default function BackgroundCard({
  background,
  campaignName,
  onSelect,
}: BackgroundCardProps) {
  return (
    <button
      type="button"
      className="background-card"
      onClick={() => onSelect(background)}
    >
      <img src={background.imageUrl} alt={background.title} />
      <div className="card-content">
        <span className="chip">{campaignName}</span>
        <h3>{background.title}</h3>
      </div>
    </button>
  );
}
