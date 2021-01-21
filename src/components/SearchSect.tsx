import search from "../assets/search.svg";
import notify from "../assets/notify.svg";

export interface Props {}

export const SearchSect: React.FC<Props> = ({}) => {
  const Styles = {
    SearchSect: "h-auto sm:h-20 w-full flex flex-col sm:flex-row items-center",
    SearchBar:
    "w-full sm:w-2/6 h-11 transition-all sm:hover:w-3/6 rounded-xl bg-gray-800 ml-auto flex items-center",
    SearchBtn:
      "h-full flex justify-center text-white items-center w-12 ml-auto border-0 focus:outline-none",
    SearchIcon: "w-4 text-white",
    SearchInput:
      "bg-transparent placeholder-gray-600 outline-none font-sans text-sm text-white ml-4 w-11/12",
    UserPart: "my-5 sm:my-0 h-11 w-full sm:w-52 ml-auto flex",
    UserData: "w-9/12 h-full flex items-center",
    UserImage: "w-11 h-full rounded-full bg-gray-200",
    UserName: "ml-3 text-gray-200",
    Notification:
      "w-3/12 h-full cursor-pointer flex justify-center items-center relative",
    Bell: "text-white h-1/2 sm:h-auto sm:w-6/12",
    AlertDot: "absolute top-1 right-6 sm:right-3 w-3 h-3 rounded-full bg-red-500",
  };

  return (
    <div>
      <div className={Styles.SearchSect}>
        <div className={Styles.SearchBar}>
          <input
            className={Styles.SearchInput}
            placeholder="Search"
            type="text"
          />
          <button className={Styles.SearchBtn}>
            <img alt="SearchIcon" className={Styles.SearchIcon} src={search} />
          </button>
        </div>
        <div className={Styles.UserPart}>
          <div className={Styles.UserData}>
            <img
              className={Styles.UserImage}
              alt="User Image"
              src="Mabroor.png"
            />
            <div className={Styles.UserName}>Mabroor</div>
          </div>
          <div className={Styles.Notification}>
            <img className={Styles.Bell} alt="notifications" src={notify} />
            <div className={Styles.AlertDot}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
