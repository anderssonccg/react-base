import styles from "./Card.module.css";

export const Card = ({ name, role, image, isActive }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={image} alt="" />
        <h2 className={styles.name}>{name}</h2>
        <strong className={styles.role}> {role}</strong>
        <div className={styles.statusContainer}>
          <span>Estado: </span>
          <strong className={isActive ? styles.active : styles.inactive}>
            {isActive ? "ACTIVO" : "INACTIVO"}
          </strong>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          dolore minima qui sapiente doloremque similique! Praesentium, ducimus
          nostrum nihil optio exercitationem tempore culpa dolorem illo, fuga at
          delectus vitae eligendi.
        </p>
      </div>
    </>
  );
};
