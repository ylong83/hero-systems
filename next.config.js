
"use client";
import { useState } from "react";

export default function Home() {
  const [studentsPerClass, setStudentsPerClass] = useState(24);
  const [classes, setClasses] = useState(1);
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("g");
  const [ingredients, setIngredients] = useState([]);

  const groups = Math.ceil(studentsPerClass / 3);
  const totalGroups = groups * classes;

  function addIngredient() {
    if(!ingredient || !amount) return;
    setIngredients([...ingredients, {ingredient, amount: Number(amount), unit}]);
    setIngredient("");
    setAmount("");
  }

  return (
    <div style={{maxWidth:900, margin:"40px auto", background:"white", padding:30, borderRadius:10}}>
      <h1>HERO Systems</h1>
      <p>Home Economics Resource Organiser</p>

      <h2>Class Setup</h2>
      <label>Students per class: </label>
      <input type="number" value={studentsPerClass} onChange={e=>setStudentsPerClass(e.target.value)} />
      <br/><br/>

      <label>Number of classes: </label>
      <input type="number" value={classes} onChange={e=>setClasses(e.target.value)} />

      <p>Groups per class (3 students): <b>{groups}</b></p>
      <p>Total groups across classes: <b>{totalGroups}</b></p>

      <hr/>

      <h2>Add Ingredient (per group)</h2>
      <input placeholder="Ingredient" value={ingredient} onChange={e=>setIngredient(e.target.value)} />
      <input placeholder="Amount" type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
      <select value={unit} onChange={e=>setUnit(e.target.value)}>
        <option value="g">g</option>
        <option value="kg">kg</option>
        <option value="ml">ml</option>
        <option value="cup">cups</option>
        <option value="tbsp">tbsp</option>
      </select>
      <button onClick={addIngredient}>Add</button>

      <h2>Shopping List</h2>
      <ul>
        {ingredients.map((i, idx) => (
          <li key={idx}>
            {i.ingredient}: {i.amount * totalGroups} {i.unit}
          </li>
        ))}
      </ul>
    </div>
  );
}
