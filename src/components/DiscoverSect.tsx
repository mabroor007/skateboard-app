export interface Props {}

export const DiscoverSect: React.FC<Props> = ({}) => {
  const Styles = {
    DiscoverSect: "h-3/6 w-full flex flex-col",
    DiscoverHeading: "text-white font-black text-2xl h-1/12",
    DiscoverBoxContent: "h-5/6 w-full mt-3 flex",
    DiscoverCard1:
      "transform transition-all hover:scale-105 bg-center h-full w-8/12 overflow-hidden bg-blue-400 cursor-pointer bg-cover rounded-2xl",
    Card1Overlay: "w-full h-full p-5 sm:p-10",
    Card1text: "w-56 font-bold text-white text-2xl",
    DiscoverCard2:
      "transform transition-all hover:scale-105 h-full w-4/12 cursor-pointer bg-yellow-600 bg-cover bg-center rounded-2xl ml-5",
  };

  return (
    <>
      <div className={Styles.DiscoverSect}>
        <h2 className={Styles.DiscoverHeading}>Discover</h2>
        <div className={Styles.DiscoverBoxContent}>
          <div
            className={Styles.DiscoverCard1}
            style={{ backgroundImage: "url(skateboy.jpg)" }}
          >
            <div className={Styles.Card1Overlay}>
              <div className={Styles.Card1text}>
                How to do jumping and land safely
              </div>
            </div>
          </div>
          <div
            className={Styles.DiscoverCard2}
            style={{ backgroundImage: "url(card2pic.jpg)" }}
          ></div>
        </div>
      </div>
    </>
  );
};
