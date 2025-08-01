import styles from "./Card.module.css";

export const Card = ({ name, role, image }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={image} alt="" />
        <h2 className={styles.name}>{name}</h2>
        <strong className={styles.role}> {role}</strong>
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
