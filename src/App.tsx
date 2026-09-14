import { useMemo, useState } from 'react';
import BackgroundCard from './components/BackgroundCard';
import FilterTabs from './components/FilterTabs';
import PreviewPanel from './components/PreviewPanel';
import UploadPanel from './components/UploadPanel';
import { campaigns, zoomBackgrounds } from './data/mockData';

export default function App() {
  const [activeCampaignId, setActiveCampaignId] = useState<string>('all');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState<string>('bg-1');

  const filteredBackgrounds = useMemo(() => {
    if (activeCampaignId === 'all') {
      return zoomBackgrounds;
    }

    return zoomBackgrounds.filter(
      (background) => background.campaignId === activeCampaignId,
    );
  }, [activeCampaignId]);

  const selectedBackground =
    filteredBackgrounds.find((bg) => bg.id === selectedBackgroundId) ??
    filteredBackgrounds[0] ??
    null;

  const selectedCampaignName =
    campaigns.find((campaign) => campaign.id === activeCampaignId)?.name ??
    'Todas';

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">ADIPA</p>
          <h1>Fondos de Zoom</h1>
        </div>
      </header>

      <main className="content-grid">
        <section className="gallery-panel">
          <FilterTabs
            campaigns={campaigns}
            activeCampaignId={activeCampaignId}
            onChange={(campaignId) => {
              setActiveCampaignId(campaignId);
              const nextBackground =
                campaignId === 'all'
                  ? zoomBackgrounds[0]
                  : zoomBackgrounds.find(
                      (bg) => bg.campaignId === campaignId,
                    ) ?? zoomBackgrounds[0];

              if (nextBackground) {
                setSelectedBackgroundId(nextBackground.id);
              }
            }}
          />

          <div className="gallery-grid">
            {filteredBackgrounds.map((background) => {
              const campaignName =
                campaigns.find((campaign) => campaign.id === background.campaignId)
                  ?.name ?? 'Sin campaña';

              return (
                <BackgroundCard
                  key={background.id}
                  background={background}
                  campaignName={campaignName}
                  onSelect={(bg) => setSelectedBackgroundId(bg.id)}
                />
              );
            })}
          </div>
        </section>

        <PreviewPanel
          background={selectedBackground}
          campaignName={selectedCampaignName}
        />
      </main>

      <UploadPanel campaigns={campaigns} />
    </div>
  );
}
