import { useEffect, useState } from "react";
import { style } from "../../core/utils/style";
import { ITabstripProps } from "./ITabstripProps";
import styles from "./Tabstrip.module.scss";
import { TabstripItem } from "./tabstripItem/TabstripItem";

export const Tabstrip: React.FC<ITabstripProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    props.selectedTabIndex
  );

  useEffect(() => {
    setSelectedIndex(props.selectedTabIndex);
  }, [props.selectedTabIndex]);

  const tabstrips = props.captions.map((title, index) => (
    <TabstripItem
      key={`${title}_${index}`}
      caption={title}
      onClick={() => {
        setSelectedIndex(index);
        props.onTabSelect?.(index);
      }}
      selected={selectedIndex === index}
    />
  ));

  return (
    <div className={style(styles.tabstrip, props.className)}>{tabstrips}</div>
  );
};
