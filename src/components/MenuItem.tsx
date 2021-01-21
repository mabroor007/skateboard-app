export interface Props {
  title: string;
  src: string;
  active?:boolean
}

export const MenuItem: React.FC<Props> = ({ title, src, active }) => {
  
  const Styles = {
    MenuItem:"MENU_ITEM flex h-16 justify-center items-center transition-all hover:bg-gray-800 cursor-pointer",
    MenuItemIcon:`w-8 h-8 rounded-xl mr-4 flex justify-center items-center ${active ? 'bg-red-500':'bg-gray-800'}`,
    MenuItemTitle:"w-2/4 text-white text-sm font-medium flex items-center"
  }

  return (
    <>
      <div className={Styles.MenuItem}>
        <div className={Styles.MenuItemIcon}>
          <img className="w-2/4" src={src} alt="StreamingIcon" />
        </div>
        <div className={Styles.MenuItemTitle}>{title}</div>
      </div>
    </>
  );
};
