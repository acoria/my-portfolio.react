import { ICustomerProps } from "./ICustomerProps";
import styles from "./Customer.module.scss";

export const Customer: React.FC<ICustomerProps> = (props) => {
  return (
    <div className={styles.customer}>
      {props.customer.logoUrl && (
        <img
          alt="company logo"
          src={props.customer.logoUrl}
          className={styles.logo}
        />
      )}
      <div>
        <h1 className={styles.name}>{props.customer.name}</h1>
        <div>{props.customer.branch}</div>
        <div>{props.customer.employeeSize}</div>
      </div>
    </div>
  );
};
