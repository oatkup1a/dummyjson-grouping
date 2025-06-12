## Dummyjson Data Grouping
- Check out at https://oatkup1a.github.io/dummyjson-grouping/
- Transform User Data from Dummyjson into Departments
- API from https://dummyjson.com/users
- Tech: TypeScript, Express, Jest, Axios

Sample Response:

```json
    {
        [Department]: {
            "male": 1,                      // ---> Male Count Summary
            "female": 1,                    // ---> Female Count Summary
            "ageRange": "XX-XX",            // ---> Range
            "hair": {                       // ---> "Color": Color Summary
                "Black": 1,                
                "Blond": 1,
                "Chestnut": 1,
                "Brown": 1
            },
            "addressUser": {                // ---> "firstNamelastName": postalCode
                "TerryMedhurst": "XXXXX",
            }
        }
    }, 
    ...
...
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/oatkup1a/dummyjson-grouping.git
```

2. Install dependencies:

```bash
npm install
```

3. Run Test:

```bash
npm run test
```

To preview grouped data:
```bash
npm run dev
```
