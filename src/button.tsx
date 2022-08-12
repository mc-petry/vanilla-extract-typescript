import * as styles from "./button.css";

export type Getter<out T> = () => T;

export function Button() {
  return <button className={styles.button({ red: true })}>button</button>;
}