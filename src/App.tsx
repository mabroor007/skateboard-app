import HomeIcon from "./assets/home.svg";
import TrendingIcon from "./assets/trending.svg";
import StreamingIcon from "./assets/streaming.svg";
import PlaylistIcon from "./assets/playlist.svg";
import { MenuItem } from "./components/MenuItem";
import { RightSideContent } from "./components/RightSideContent";

const App: React.FC = () => {
  const Styles = {
    Main: "w-auto h-auto p-5 overflow-x-hidden md:p-0 md:h-screen flex bg-gray-900",
    LeftSidePanel: "hidden lg:flex h-full w-1/6 flex flex-col",
    LogoHead:
    "cursor-pointer transition-all hover:opacity-40 w-full h-20 text-white font-sans font-black flex mx-8 items-center",
    MenuBox: "MENU_BOX flex flex-col w-full h-72",
    MenuBoxTitle:
      "MENU_TITLE mx-8 mb-3 text-xs font-sans font-semibold text-gray-600",
    DividerH: "mx-8 mt-2 w-4/5 border border-gray-800 border-solid",
    CategoryBoxTitle:
      "MENU_TITLE mx-8 mb-2 mt-5 text-xs font-sans font-semibold text-gray-600",
  };

  return (
    <div className={Styles.Main}>
      <div className={Styles.LeftSidePanel}>
        <div className={Styles.LogoHead}>Skateboard</div>
        <div className={Styles.MenuBox}>
          <div className={Styles.MenuBoxTitle}>MENU</div>
          <MenuItem title="Discover" active src={HomeIcon} />
          <MenuItem title="Trending" src={TrendingIcon} />
          <MenuItem title="Streaming" src={StreamingIcon} />
          <MenuItem title="Playlist" src={PlaylistIcon} />
        </div>
        <div className={Styles.DividerH}></div>
        <div className={Styles.MenuBox}>
          <div className={Styles.CategoryBoxTitle}>Category</div>
          <MenuItem title="Streaming" src={StreamingIcon} />
          <MenuItem title="Trending" src={TrendingIcon} />
          <MenuItem title="Discover" src={HomeIcon} />
        </div>
      </div>
      <RightSideContent />
    </div>
  );
};

export default App;
