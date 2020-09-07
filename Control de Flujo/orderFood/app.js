
 //ask menu
switch (prompt('¿Qué hay en el menú hoy?')) {
  //show fav plate
      case 'ceviche':
        document.write('Quiero ordenar ceviche.');
        break;
      case 'tacos al pastor':
        document.write('Quiero ordenar tacos al pastor.');
      case 'empanada chilena':
        document.write('Quiero ordenar empanada chilena.');
        break;
      default:
        document.write('Quiero ordenar hamburguesa.');
        break;
    }