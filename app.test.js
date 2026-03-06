// const request = require('supertest');
// const app = require('./app');

// describe('API Events', () => {

//     // ===================== GET /events =====================
//     describe('GET /events', () => {
//         it('devrait retourner un message de bienvenue', async () => {
//             const res = await request(app).get('/events');
//             expect(res.statusCode).toBe(200);
//             expect(res.body.message).toBe("Bienvenue sur l'API Events !");
//         });
//     });

//     // ===================== POST /events =====================
//     describe('POST /events', () => {

//         it('devrait créer un événement valide (201)', async () => {
//             // Date dans le futur
//             const futureDate = new Date();
//             futureDate.setFullYear(futureDate.getFullYear() + 1);

//             const res = await request(app)
//                 .post('/events')
//                 .send({ title: 'Concert', date: futureDate.toISOString() });

//             expect(res.statusCode).toBe(201);
//             expect(res.body).toHaveProperty('id');
//             expect(res.body.title).toBe('Concert');
//         });

//         it('devrait refuser si le titre est manquant (400)', async () => {
//             const futureDate = new Date();
//             futureDate.setFullYear(futureDate.getFullYear() + 1);

//             const res = await request(app)
//                 .post('/events')
//                 .send({ date: futureDate.toISOString() });

//             expect(res.statusCode).toBe(400);
//             expect(res.body.error).toBe('Le titre et la date sont obligatoires');
//         });

//         it('devrait refuser si la date est manquante (400)', async () => {
//             const res = await request(app)
//                 .post('/events')
//                 .send({ title: 'Concert' });

//             expect(res.statusCode).toBe(400);
//             expect(res.body.error).toBe('Le titre et la date sont obligatoires');
//         });

//         it('devrait refuser si le body est vide (400)', async () => {
//             const res = await request(app)
//                 .post('/events')
//                 .send({});

//             expect(res.statusCode).toBe(400);
//             expect(res.body.error).toBe('Le titre et la date sont obligatoires');
//         });

//         it('devrait refuser une date dans le passé (400)', async () => {
//             const res = await request(app)
//                 .post('/events')
//                 .send({ title: 'Ancien concert', date: '2020-01-01' });

//             expect(res.statusCode).toBe(400);
//             expect(res.body.error).toBe('La date ne peut pas être dans le passé');
//         });
//     });
// });
