import { useEffect, useState } from "react";
import { getUserLearningId } from "../data/localStorage";
import styles from "../styles/Home.module.css";

const getLastFourCharsUserLearningId = (userLearningId?: string | null) => {
  if (!userLearningId) {
    return "";
  }

  if (userLearningId.length >= 8) {
    const lastFourChars = userLearningId?.substring(
      userLearningId.length - 4,
      userLearningId.length
    );
    return `•••• •••• •••• ${lastFourChars}`;
  }

  return "•••• •••• ••••";
};

const UserLearningKey: React.FC = () => {
  const [userLearningId, setUserLearningId] = useState<string | null>();
  const [showUserLearningId, setShowUserLearningId] = useState(false);

  useEffect(() => {
    setUserLearningId(getUserLearningId());
  }, []);

  const shownUserLearningId = showUserLearningId
    ? userLearningId
    : getLastFourCharsUserLearningId(userLearningId);

  if (!userLearningId) {
    return null;
  }

  return (
    <div className={styles.userLearningKey}>
      <span>User learning key: {shownUserLearningId}</span>
      <button onClick={() => setShowUserLearningId(!showUserLearningId)}>
        {showUserLearningId ? "Hide" : "Show"}
      </button>
    </div>
  );
};
export default UserLearningKey;
