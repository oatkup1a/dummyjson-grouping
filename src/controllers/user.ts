import axios from "axios";
import { User, Department } from "../models/user";

export async function getTransformedUserData(): Promise<Record<string, Department>> {
  const { data } = await axios.get("https://dummyjson.com/users");
  const users: User[] = data.users;

  const result: Record<string, Department> = {};

  for (const user of users) {
    const dept = user.company.department;

    if (!result[dept]) {
      result[dept] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
        _ages: []
      };
    }

    const summary = result[dept];

    if (user.gender === "male") summary.male+=1;
    else if (user.gender === "female") summary.female+=1;

    if (!summary._ages) summary._ages = [];
    summary._ages.push(user.age);

    const hairColor = user.hair.color;
    summary.hair[hairColor] = (summary.hair[hairColor] || 0) + 1;

    const fullName = `${user.firstName}${user.lastName}`;
    summary.addressUser[fullName] = parseInt(user.address.postalCode, 10);
  }

  for (const dept of Object.keys(result)) {
    const ages = result[dept]._ages;
    const min = Math.min(...(ages || []));
    const max = Math.max(...(ages || []));
    result[dept].ageRange = `${min}-${max}`;
    delete result[dept]._ages;
  }

  return result;
}
