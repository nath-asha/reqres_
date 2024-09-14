describe('Test suite', () => {
    it('Test case', () => {
        
        cy.request({
            method:'POST',
            url:"https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader",
            }
    }).then(Response => {
        expect(Response.status).to.eq(201);
    })
    });
});

describe('Collection of CRUD operations', () => {
    it('Updating', () => {

        cy.request({
            method:'PUT',
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(Response => {
            expect(Response.status).to.eq(200);
        })
    });
});

describe('CRUD operations', () => {
    it('List users', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users?page=2",
        }).then(Response =>{
            expect(Response.status).to.eq(200);
        })
    });
});

describe('CRUD operations', () => {
    it('Single user', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users/2"
        }).then(Response =>{
            expect(Response.status).to.eq(200);

        })
    });
});

describe('CRUD operations', () => {
    it('deleting', () => {
        cy.request({
            method:'DELETE',
            url:"https://reqres.in/api/users/2"
        }).then(Response =>{
            expect(Response.status).to.eq(204)
        })
    });
});