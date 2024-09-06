import { ICustomerProps } from "./ICustomerProps";
import styles from "./Customer.module.scss";
import { style } from "../../../../core/utils/style";

export const Customer: React.FC<ICustomerProps> = (props) => {
  return (
    <div className={styles.customer}>
      {props.customer.logoUrl && (
        <img
          alt={`Company logo from ${props.customer.name}`}
          src={props.customer.logoUrl}
          className={styles.logo}
        />
      )}
      <div>
        <h1
          className={style(
            styles.name,
            !props.customer.branch && !props.customer.employeeSize
              ? styles.noAdditionalInfo
              : ""
          )}
        >
          {props.customer.name}
        </h1>
        {props.customer.branch && <div>{props.customer.branch}</div>}
        {props.customer.employeeSize && (
          <div>{props.customer.employeeSize}</div>
        )}
      </div>
    </div>
  );
};
