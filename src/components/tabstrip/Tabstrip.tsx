import { useState } from "react";
import { style } from "../../core/utils/style";
import { ITabstripProps } from "./ITabstripProps";
import styles from "./Tabstrip.module.scss";
import { TabstripItem } from "./tabstripItem/TabstripItem";

export const Tabstrip: React.FC<ITabstripProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  const tabstrips = props.captions.map((title, index) => (
    <TabstripItem
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
