const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Assignment App!", () => {
    describe("Rest end point testing", () => {
        it("Test parsed response for end point /api/v1/parse", done => {
            chai.request(app)
            .post("/api/v1/parse")
            .send({data:"JOHN000MICHAEL0009994567"})
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equals("Success");
                expect(res.body.data.firstName).to.equals("JOHN000");
                expect(res.body.data.lastName).to.equals("MICHAEL000");
                expect(res.body.data.clientId).to.equals("9994567");
                done();
            })
        });

        it("Test parsed response for end point /api/v2/parse", done => {
            chai.request(app)
            .post("/api/v2/parse")
            .send({data:"JOHN000MICHAEL0009994567"})
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equals("Success");
                expect(res.body.data.firstName).to.equals("JOHN");
                expect(res.body.data.lastName).to.equals("MICHAEL");
                expect(res.body.data.clientId).to.equals("999-4567");
                done();
            })
        })

        it("Test parsed response for end point /api/v1/parse with incorrect data", done => {
            chai.request(app)
            .post("/api/v1/parse")
            .send({data1:"JOHN000MICHAEL0009994567"})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.name).to.equals("ValidationError");
                expect(res.body.error).to.equals("Bad Request");
                done();
            })
        })

        it("Test parsed response for end point /api/v2/parse with incorrect data", done => {
            chai.request(app)
            .post("/api/v1/parse")
            .send({data1:"JOHN000MICHAEL0009994567"})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.name).to.equals("ValidationError");
                expect(res.body.error).to.equals("Bad Request");
                done();
            })
        })
    })
})
