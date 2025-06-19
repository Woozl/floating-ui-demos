import type React from "react";
import styles from "./PageWrapper.module.css";
import { Link } from "@tanstack/react-router";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigationSidebar}>
        <h1 className={styles.logo}>Floating UI</h1>
        <hr />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
      <main className={styles.contentContainer}>{children}</main>
    </div>
  );
}
