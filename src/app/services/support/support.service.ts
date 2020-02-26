import { Injectable } from '@angular/core';
import { Support } from 'src/app/interface/support';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  supports: Support[];
  constructor() { 
    let support0:Support={
      id:0,
      autor:'',
      alias:'Lider de Organización',
      contentSupport:'Todas las organizaciones tienen distintos objetivos, pero con FENPOF podemos unirlas y lograr lo principal que es visibilizar nuestra causa  demostrando que no somos invisibles',
    }
    let support1:Support={
      id:1,
      autor:'',
      alias:'Paciente de distrofia muscular',
      contentSupport:'“Es muy difícil para nosotros y nuestras familias el tener una enfermedad poco frecuente en este país donde muchas veces no tenemos código fonasa, yo no puedo comprar un bono por distrofia muscular porque no existe, debemos atendernos por otra cosa en forma particular”',
    }
    let support2:Support={
      id:2,
      autor:'',
      alias:'Paciente',
      contentSupport:'“Existían médicos que creían conocer mi diagnóstico, ya muchos de los servicios públicos no tienen los medios para confirmarlo con exámenes genéticos. <br> Yo me demore cerca de 4 años en confirmar mi diagnóstico más certero, lo que es un tiempo bastante más corto en comparación a otros pacientes”',
    }

    let support3:Support={
      id:3,
      autor:'',
      alias:'Testimonio rescatado de Corporación Chiari Chile',
      contentSupport:'Un día la hija menor de una de nuestras miembros fue diagnosticada con una enfermedad rara llamada Arnold Chiari y una Siringomelia, sólo tenía 12 años. Ahí empezó un largo peregrinar en internet para saber en qué consiste esta malformación y también en tratar de encontrar gente que compartía esta malformación. <br>En todo ese camino se encontró a personas maravillosas, que ya habían pasado por el mismo camino y que decidieron caminar juntas.<br>Luego de la cirugía, esta niña realiza una vida cercana a lo normal y aunque siempre puede haber tormenta después de esta calma, y hoy es una mujer adulta.',
    }
  this.supports=[support0,support1,support2,support3];
  }

  getSupports(){
    return this.supports;
  }
}
