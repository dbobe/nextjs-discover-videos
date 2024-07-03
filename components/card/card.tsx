import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";

interface cardProps {
  imgUrl: string;
  size: "large" | "medium" | "small"; // Defined values for size
}

export default function Card({ imgUrl, size = "medium" }: cardProps) {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("Hi error");

    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };

  return (
    <div className={styles.container}>
      <h1>Card</h1>
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt="Image"
          fill
          className={styles.cardImg}
          onError={handleOnError}
        />
      </div>
    </div>
  );
}
