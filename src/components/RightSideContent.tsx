import { SearchSect } from "./SearchSect"
import { DiscoverSect } from "./DiscoverSect"

export interface Props {}

export const RightSideContent: React.FC<Props> = () => {
  const Styles = {
    RightSidePanel: "h-auto md:h-full w-full flex flex-col mx-5",
    MostWatchedSect:"md:h-2/6 w-full flex flex-col md:flex-row",
    mCard1:"transform h-52 w-full mt-5 md:mt-0 md:w-4/12 md:h-full rounded-2xl bg-cover bg-center transition-all hover:scale-105 cursor-pointer bg-red-500",
    mCard2:"transform h-52 mt-5 w-full md:w-8/12 md:mt-0 md:h-full rounded-2xl bg-cover bg-center transition-all hover:scale-105 md:ml-4 cursor-pointer bg-gray-600",
  };

  return (
    <>
      <div className={Styles.RightSidePanel}>
        <SearchSect />
        <DiscoverSect />
        <div className={Styles.MostWatchedSect}>
          <div className={Styles.mCard1} style={{backgroundImage:"url(josh.jpg)"}}>
          </div>
          <div className={Styles.mCard2} style={{backgroundImage:"url(bret.jpg)"}}>
          </div>
        </div>
      </div>
    </>
  );
};
