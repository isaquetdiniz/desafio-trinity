import axios from "axios";

describe("User registration tests", () => {
  it("Should get a error if the informations are wrong", async () => {
    const body = {
      query: `
            mutation {
                createNewUser(user: {
                  name: "Isaque Diniz",
                  email: "teste.22.com",
                  phone: "8192a990=",
                  street: "Rua do nada",
                  city: "Camaragibe",
                  zipcode: "54759-060"
                })
            }
        
        `,
      variables: {}
    };

    const options = {
      headers: {}
    };

    const res = await axios.post("http://localhost:4000/graphql", body, options);
    expect(res.data.errors[0].message).not.toBe(null);
  });

  it("Should get a success if the informations are right", async () => {
    const body = {
      query: `
            mutation {
                createNewUser(user: {
                    name: "Isaque Diniz",
                    email: "teste.22@gmail.com",
                    phone: "81982218902",
                    street: "Rua do nada",
                    city: "Camaragibe",
                    zipcode: "54759-060"
                })
            }
        
        `,
      variables: {}
    };

    const options = {
      headers: {}
    };

    const res = await axios.post("http://localhost:4000/graphql", body, options);
    expect(res.data.data.createNewUser).toBe("User created");
  });
});