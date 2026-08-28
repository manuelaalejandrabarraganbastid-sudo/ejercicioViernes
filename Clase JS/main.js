const empleados = [
    { nombre: "Carlos", edad: 25, salario: 2500000, area: "Desarrollo" },
    { nombre: "Ana", edad: 30, salario: 3500000, area: "Diseño" },
    { nombre: "Pedro", edad: 28, salario: 3000000, area: "Desarrollo" },
    { nombre: "Laura", edad: 35, salario: 4500000, area: "Gerencia" },
    { nombre: "Juan", edad: 22, salario: 2000000, area: "Soporte" }
];
 
function mostrarEmpleados() {
    empleados.forEach ( empleado => {
          console.log(`Nombre: ${empleado.nombre}, Edad: ${empleado.edad}, Salario: ${empleado.salario}, Area ${empleado.area}`);
    });

}
 mostrarEmpleados()
  
 function bucarEmpleado (nombre){
    return empleado.find(empleados => empleados.nombre === nombre); 
        
}
 bucarEmpleado()
