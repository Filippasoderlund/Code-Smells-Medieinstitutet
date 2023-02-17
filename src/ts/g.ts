/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
*/

function getLength(jumpings: number[]): number {
  return jumpings.reduce((jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump);
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
*/

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
};

function getStudentStatus(student: Student): string {
  if((student.name == "Sebastian") && (student.handedInOnTime)){
    return 'VG';
  }
  return 'IG';
};

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
*/

class Temp {
  constructor(
    public city: string, 
    public timeOfMeasurement: Date, 
    public temperature: number) {}
}

function averageWeeklyTemperature(measurements: Temp[]) :number {
  
  const WeekInMilliseconds = 604800000;
  const daysInWeek = 7;
  const city = "stockholm";

  let temperatureSum = 0;

  for (let i = 0; i < measurements.length; i++) {
    if (measurements[i].city === city) {
      if (measurements[i].timeOfMeasurement.getTime() > Date.now() - WeekInMilliseconds) {
        temperatureSum += measurements[i].temperature;
      }
    }
  }

  return temperatureSum / daysInWeek;             
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
*/

class Product {
  constructor (
    public name: string,
    public price: number,
    public amount: number,
    public description: string,
    public image: string,
    public parent: HTMLElement,
  ) {}
}

function showProduct(product: Product) {
    let container = document.createElement("div");
    let title = document.createElement("h4");
    let price = document.createElement("strong");
    let image = document.createElement("img");

    title.innerHTML = product.name;
    price.innerHTML = product.price.toString();
    image.src = product.image;

    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(price);
    
    product.parent.appendChild(container);
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
*/

function presentStudents(students: Student[]) {
  const passedStudents = document.querySelector("ul#passedstudents");
  const failedStudents = document.querySelector("ul#failedstudents");

  students.forEach((student) => {
    const container = document.createElement("li");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = student.handedInOnTime;

    container.appendChild(checkbox);

    if (student.handedInOnTime) {
      passedStudents?.appendChild(container);
    }
    return failedStudents?.appendChild(container)
  })
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
*/

function concatenateStrings () {
  let texts: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];

  return texts.join(" ");
  }

/* 

7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/
class User {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string
  ) {}
}

function createUser(user: User) {
  const startYear: number = 1970;
  const minimumAge: number = 20;

  let ageDiff = Date.now() - user.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - startYear);

  if (userAge > minimumAge) {
    // Logik för att skapa en användare
  }
  return `Du är under ${minimumAge} år.`;
  
};