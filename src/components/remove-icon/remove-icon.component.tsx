import React from "react";
import styles from "./remove-icon.module.css";

type RemoveIconProps = {
    isVisible?: boolean;
    onClickIcon: () => void;
}
export const RemoveIcon: React.FC<RemoveIconProps> = ({onClickIcon, isVisible}) => 
    <button onClick={onClickIcon} style={{visibility: isVisible? "visible" : "hidden"}}className={styles.removeButton}>&#10005;</button>;