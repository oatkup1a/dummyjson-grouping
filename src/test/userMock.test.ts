import { getTransformedUserData } from "../controllers/user";
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Mock Data Test", () => {
  it("Transformed Data matches the Mock Data", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        users: [
          {
            firstName: "Terry",
            lastName: "Medhurst",
            gender: "male",
            age: 50,
            hair: { color: "Black" },
            address: { postalCode: 12345 },
            company: { department: "Marketing" },
          },
          {
            firstName: "Jane",
            lastName: "Doe",
            gender: "female",
            age: 25,
            hair: { color: "Blond" },
            address: { postalCode: 54321 },
            company: { department: "Marketing" },
          },
          {
            firstName: "Jim",
            lastName: "Beam",
            gender: "male",
            age: 30,
            hair: { color: "Brown" },
            address: { postalCode: 99999 },
            company: { department: "Engineering" },
          }
        ]
      }
    });

    const summary = await getTransformedUserData();

    expect(summary).toEqual({
      Marketing: {
        male: 1,
        female: 1,
        ageRange: "25-50",
        hair: { Black: 1, Blond: 1 },
        addressUser: {
          TerryMedhurst: 12345,
          JaneDoe: 54321
        }
      },
      Engineering: {
        male: 1,
        female: 0,
        ageRange: "30-30",
        hair: { Brown: 1 },
        addressUser: {
          JimBeam: 99999
        }
      }
    });
  });
});
