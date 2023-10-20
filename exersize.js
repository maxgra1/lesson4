const employee1 = {
    name: "John",
    lastName: "Doe",
    age: 30,
    companiesWorked: ["Company A", "Company B", "Company C", "Company D"],
  };
  
  const employee2 = {
    name: "Jane",
    lastName: "Smith",
    age: 25,
    companiesWorked: ["Company B", "Company C", "Company D"],
  };
  
  function compareEmployees(employee1, employee2) {
    const numCompanies1 = employee1.companiesWorked.length;
    const numCompanies2 = employee2.companiesWorked.length;
  
    if (numCompanies1 > numCompanies2) {
      console.log(`${employee1.name} has more companies.`);
    } else if (numCompanies2 > numCompanies1) {
      console.log(`${employee2.name} has more companies.`);
    } else {
      console.log(`${employee1.name} and ${employee2.name} have the same number of companies.`);
    }
  
    console.log("Companies worked by", employee1.name, ":");
    for (const company of employee1.companiesWorked) {
      console.log(company);
    }
  
    console.log("Companies worked by", employee2.name, ":");
    for (const company of employee2.companiesWorked) {
      console.log(company);
    }
  }
  
  compareEmployees(employee1, employee2);
  