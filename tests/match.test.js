const request = require("supertest");
const app = require("../index"); // Importa a nossa API

describe("🐶 Suíte de Testes - Dog Match API (Test Harness)", () => {

  it("1. Deve retornar erro 400 se o JSON do perfil estiver vazio", async () => {
    const res = await request(app).post("/match").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("2. Regra Eliminatória: NUNCA deve retornar cachorros indisponíveis", async () => {
    const userProfile = { location: "SP" };
    const res = await request(app).post("/match").send(userProfile);
    
    expect(res.statusCode).toBe(200);
    
    // A cachorrinha 'Mel' (id 5) está availableForMatch: false, não pode vir na lista
    const dogNames = res.body.map(dog => dog.name);
    expect(dogNames).not.toContain("Mel");
  });

  it("3. Match por Localização: Deve filtrar corretamente o estado", async () => {
    const userProfile = { location: "RJ" };
    const res = await request(app).post("/match").send(userProfile);
    
    expect(res.statusCode).toBe(200);
    
    // Apenas a 'Nina' mora no RJ
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("Nina");
  });

  it("4. Match Perfeito: Deve cruzar localização e porte (Porte Grande)", async () => {
    const userProfile = { location: "SP", preferredSize: "large" };
    const res = await request(app).post("/match").send(userProfile);
    
    expect(res.statusCode).toBe(200);
    
    // Apenas o 'Thor' é porte grande (large) e mora em SP
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("Thor");
  });

});