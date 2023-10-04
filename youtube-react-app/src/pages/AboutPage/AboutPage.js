import { useContext } from "react";
import styles from "./AboutPage.module.css";
import { PageContext } from "../../contexts/PageContext";

const AboutPage = () => {
  // Step 3 of context api --
  // Let's subscribe to the context data from PageContext using useContext() hook
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  return (
    <div>
      <h1 className={styles.greenText}>About Page</h1>
      <p className={styles.purpleText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptas.
      </p>
      <p>
        Login Status:
        {userStatus.isLoggedIn ? "Logged In" : "Not Authenticated yet"}
      </p>
      <p>Last Login: {userStatus.lastLogin}</p>
    </div>
  );
};

export default AboutPage;
