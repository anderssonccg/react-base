import { Card } from "./components/Card";
import styles from "./App.module.css";

function App() {
  const students = [
    {
      name: "Andres",
      role: "Estudiante",
      img: "https://i.pravatar.cc/100",
      isActive: true,
    },
    {
      name: "Alessandro",
      role: "Estudiante",
      img: "https://i.pravatar.cc/100",
      isActive: false,
    },
    {
      name: "Mauricio",
      role: "Estudiante",
      img: "https://i.pravatar.cc/100",
      isActive: true,
    },
  ];

  return (
    <>
      <h1 className={styles.title}>Listado de estudiantes</h1>
      <section className={styles.container}>
        {students.map(({ name, role, img, isActive }, index) => {
          return (
            <Card
              key={index}
              name={name}
              role={role}
              image={img}
              isActive={isActive}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
