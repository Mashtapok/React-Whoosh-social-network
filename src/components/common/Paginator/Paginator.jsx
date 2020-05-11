import styles from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let isLeftDisabled = portionNumber > 1 ? false : true;
    let isRightDisabled = portionCount > portionNumber ? false : true;

    return (
        <div className={styles.paginator}>
            <button className={styles.arrows} disabled={isLeftDisabled}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}><i className="fas fa-angle-left"/>
            </button>
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map(page => (
                <button className={currentPage === page && styles.selectedPage}
                        onClick={(e) => {
                            onPageChanged(page)
                        }}>{page}</button>
            ))}
            <button className={styles.arrows}
                    disabled={isRightDisabled}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}><i className="fas fa-angle-right"/>
            </button>
        </div>
    );
};

export default Paginator;