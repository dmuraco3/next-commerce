import styles from './footer.module.css'

export const Footer: React.FC = () => {
    return (<div>
        {/* LEFT HALF */}
        <div className={styles.float_h}>
            <div>
                <div className={styles.topLeft}>
                    <h1>
                        HAPPY DAYS CLOTHING
                    </h1>
                    <p>
                        contact@site.com
                        123-456-7890
                    </p>
                </div>
                <div className={styles.bottomLeft}>
                    <p>Facebook</p>
                    <p>Facebook</p>
                    <p>Facebook</p>
                    <p>Facebook</p>
                </div>
            </div>
        </div>

        {/* RIGHT HALF */}
        <div className={styles.empty}>
            <div className={styles.float_h}>
                <div>
                    <div className={styles.topRight}>
                        <ul>
                            <li>
                                Shop
                                <ul>
                                    <li>
                                        New
                                    </li>
                                    <li>
                                        Men
                                    </li>
                                    <li>
                                        Women
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottomRight}>
                        <p>
                            © 2021 by Happy Days LLC.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default Footer;