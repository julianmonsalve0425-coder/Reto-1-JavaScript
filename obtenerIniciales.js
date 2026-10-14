function obtenerIniciales(nombreCompleto) {
  // 1. Validar que sea estrictamente un string y que no quede vacío tras quitarle espacios
  if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
    return "Entrada inválida";
  }

  // 2. Separar las palabras por espacios (la expresión /\s+/ maneja uno o más espacios)
  const palabras = nombreCompleto.trim().split(/\s+/);

  // 3. Obtener la primera letra de cada palabra
  const iniciales = palabras.map(palabra => palabra[0]);

  // 4. Unir las iniciales en un solo texto y convertirlas a mayúsculas
  return iniciales.join('').toUpperCase();
}

// Pruebas en consola
// Prueba 1: Formato estándar en minúsculas
console.log(obtenerIniciales("ana maria lópez")); 
// Salida: AML

// Prueba 2: Formato con espacios extras entre palabras, al inicio y al final
console.log(obtenerIniciales("   carlos    alberto   gómez   ")); 
// Salida: CAG

// Prueba 3: Formato con nombres de diferente longitud y mayúsculas/minúsculas
console.log(obtenerIniciales("pedro pablo jaramillo")); 
// Salida: PPJ

// Prueba 4: Entrada inválida (se pasa un número en lugar de un string)
console.log(obtenerIniciales(12345)); 
// Salida: Entrada inválida

// Prueba 5 (adicional): Entrada inválida con una cadena compuesta solo de espacios
console.log(obtenerIniciales("     ")); 
// Salida: Entrada inválida