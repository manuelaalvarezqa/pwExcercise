// @ts-check
import { test, expect } from '@playwright/test';

var userId = 0;

test.skip('Get users', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users',
    {
        
        params:{
        'page':'2'
    }});
    console.log(response);
    expect(response.status()).toBe(200);
});


test('Create user', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {data:{"name": "Manuela Alvarez",
            "job": "Quality Engieneer"},
            headers:{"Accept":"application/json"}
        }
    );
    var jsonRes = await response.json();
    userId = jsonRes.id;
    console.log(jsonRes);
    console.log(userId);

    expect(response.status()).toBe(201);
});

test('Update user', async ({request}) => {
     const response = await request.put('https://reqres.in/api/users/'+userId,
        {data:{"name": "Manuela Alvarez",
            "job": "Pet Sitter"},
            headers:{"Accept":"application/json"}
        }
    );
    var jsonRes = await response.json();
    //userId = jsonRes.id;
    console.log(jsonRes);
    //console.log(userId);

    expect(response.status()).toBe(200);
});

test('Delete user', async ({request}) => {
     const response = await request.delete('https://reqres.in/api/users/'+userId,
       
    );
    var jsonRes = await response.json();
    //userId = jsonRes.id;
    console.log(jsonRes);
    //console.log(userId);

    expect(response.status()).toBe(204);
});