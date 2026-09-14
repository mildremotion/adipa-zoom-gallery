type FilterTabsProps = {
  campaigns: { id: string; name: string }[];
  activeCampaignId: string;
  onChange: (campaignId: string) => void;
};

export default function FilterTabs({
  campaigns,
  activeCampaignId,
  onChange,
}: FilterTabsProps) {
  return (
    <div className="filter-tabs">
      <button
        type="button"
        className={activeCampaignId === 'all' ? 'tab active' : 'tab'}
        onClick={() => onChange('all')}
      >
        Todas
      </button>

      {campaigns.map((campaign) => (
        <button
          key={campaign.id}
          type="button"
          className={activeCampaignId === campaign.id ? 'tab active' : 'tab'}
          onClick={() => onChange(campaign.id)}
        >
          {campaign.name}
        </button>
      ))}
    </div>
  );
}
