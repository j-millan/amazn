import styles from "./PriceTag.module.css";

interface PriceTagProps {
  price: number;
}

export const PriceTag = ({ price }: PriceTagProps) => {
  const getInteger = (): string => {
    return Math.floor(price).toLocaleString();
  };

  const getDecimals = (): string => {
    return price.toString().split(".")[1];
  };

  return (
    <span className={styles.priceTag}>
      <span className={styles.currencySign}>$</span>
      <span className={styles.integer}>{getInteger()}</span>
      <span className={styles.decimals}>{getDecimals()}</span>
    </span>
  );
};
