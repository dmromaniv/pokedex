import { Circles } from "react-loader-spinner";

import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Circles
        height="120"
        width="120"
        color="#9195df"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}
