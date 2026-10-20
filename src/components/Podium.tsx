interface PodiumWinner {
  name: string;
  photo?: string;
}

interface PodiumProps {
  winners: PodiumWinner[];
}

const Podium: React.FC<PodiumProps> = ({ winners }) => {
  const firstPlace = winners[0];
  const secondPlace = winners[1];
  const thirdPlace = winners[2];

  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="flex items-end justify-center gap-1 sm:gap-4 h-64">
        <div
          className="flex flex-col items-center relative px-2 sm:px-4 w-24 sm:w-32 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-gray h-40 sm:h-48 shadow-[0_10px_15px_-3px_rgba(255,255,255,0.15)] animate-podium-bounce text-dark"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-2xl font-bold absolute -top-8 text-gold">2°</div>
          <div className="rounded-full bg-black/10 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-gold w-16 h-16 sm:w-20 sm:h-20">
            {secondPlace?.photo ? (
              <img
                src={secondPlace.photo}
                alt={secondPlace.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            ) : (
              <div className="text-3xl">🥈</div>
            )}
          </div>
          <div className="font-bold text-center text-sm sm:text-base">
            {secondPlace?.name || "-"}
          </div>
        </div>

        <div className="flex flex-col items-center relative px-2 sm:px-4 w-24 sm:w-32 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-gold-light to-gold h-48 sm:h-56 shadow-[0_10px_15px_-3px_rgba(212,175,55,0.35)] animate-podium-bounce text-dark">
          <div className="text-2xl font-bold absolute -top-8 text-gold-light">1°</div>
          <div className="rounded-full bg-black/10 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-white w-20 h-20 sm:w-24 sm:h-24">
            {firstPlace?.photo ? (
              <img
                src={firstPlace.photo}
                alt={firstPlace.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <div className="text-3xl">🥇</div>
            )}
          </div>
          <div className="font-bold text-center text-sm sm:text-base">
            {firstPlace?.name || "-"}
          </div>
        </div>

        <div
          className="flex flex-col items-center relative px-2 sm:px-4 w-24 sm:w-32 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-gold-dark to-dark-light h-32 sm:h-40 shadow-[0_10px_15px_-3px_rgba(154,123,26,0.3)] animate-podium-bounce text-white border border-gold/30"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-2xl font-bold absolute -top-8 text-gold">3°</div>
          <div className="rounded-full bg-white/10 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-gold w-16 h-16 sm:w-20 sm:h-20">
            {thirdPlace?.photo ? (
              <img
                src={thirdPlace.photo}
                alt={thirdPlace.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            ) : (
              <div className="text-3xl">🥉</div>
            )}
          </div>
          <div className="font-bold text-center text-sm sm:text-base">
            {thirdPlace?.name || "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podium;
