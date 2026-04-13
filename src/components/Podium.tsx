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
          className="flex flex-col items-center relative px-2 sm:px-4 w-24 sm:w-32 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-gray-300 to-gray-400 h-40 sm:h-48 shadow-[0_10px_15px_-3px_rgba(156,163,175,0.3)] animate-podium-bounce"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-2xl font-bold absolute -top-8">2°</div>
          <div className="rounded-full bg-white/20 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-white w-16 h-16 sm:w-20 sm:h-20">
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

        <div className="flex flex-col items-center relative px-2 sm:px-4 w-24 sm:w-32 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-yellow-400 to-yellow-600 h-48 sm:h-56 shadow-[0_10px_15px_-3px_rgba(245,158,11,0.3)] animate-podium-bounce">
          <div className="text-2xl font-bold absolute -top-8">1°</div>
          <div className="rounded-full bg-white/20 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-white w-20 h-20 sm:w-24 sm:h-24">
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
          className="flex flex-col items-center relative px-2 sm:px-4 w-24 sm:w-32 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-amber-600 to-amber-800 h-32 sm:h-40 shadow-[0_10px_15px_-3px_rgba(180,83,9,0.3)] animate-podium-bounce"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-2xl font-bold absolute -top-8">3°</div>
          <div className="rounded-full bg-white/20 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-white w-16 h-16 sm:w-20 sm:h-20">
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
