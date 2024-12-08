import EpisodeCard from "./EpisodeCard";

const EpisodeList = ({
  episodes,
  animeImage,
  visibleEpisodes,
  onPlayClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {episodes.slice(0, visibleEpisodes).map((episode, index) => (
        <EpisodeCard
          key={episode.mal_id}
          episode={episode}
          animeImage={animeImage}
          index={index}
          onPlayClick={onPlayClick}
        />
      ))}
    </div>
  );
};

export default EpisodeList;
