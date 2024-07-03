import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

interface navBarProps {
  username: string;
}

export default function NavBar({ username }: navBarProps) {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickHome = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width={128}
              height={34}
            />
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {showDropdown ? (
                <Image
                  src="/static/arrow_up.svg"
                  alt="Open dropdown"
                  width={24}
                  height={24}
                  className={styles.arrows}
                />
              ) : (
                <Image
                  src="/static/arrow_down.svg"
                  alt="Open dropdown"
                  width={24}
                  height={24}
                  className={styles.arrows}
                />
              )}

              {/* Expand more icon */}
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" className={styles.linkName}>
                    Sign Out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
