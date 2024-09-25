import React, { useState } from 'react';
import './TA.css'; 

function ListaDeTareas() {
  const [tarea, setTarea] = useState(''); 
  const [tareas, setTareas] = useState([]); 

  const manejarCambio = (e) => {
    setTarea(e.target.value); 
  };

  const agregarTarea = (e) => {
    e.preventDefault();
    if (tarea.trim() !== '') {
      setTareas([...tareas, tarea]); 
      setTarea(''); 
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1); 
    setTareas(nuevasTareas); 
  };

  return (
    <div>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={tarea}
          onChange={manejarCambio}
          placeholder="Escribe una tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>
            {t}
            <button className="delete-btn" onClick={() => eliminarTarea(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
