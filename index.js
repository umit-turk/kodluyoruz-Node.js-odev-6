const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const router = new Router();

router.get('/index', async function (ctx){
    ctx.body = '<h1>Anasayfaya hosgeldiniz</h1>';
    ctx.status = 200;
});
router.get('/hakkimda', async function (ctx){
    ctx.body = '<h1>Hakkimdaya hosgeldiniz</h1>';
    ctx.status = 200;
});
router.get('/iletisim', async function (ctx){
    ctx.body = '<h1>Iletisime hosgeldiniz</h1>';
    ctx.status = 200;
});


app.use(router.routes());

app.listen(3000, function () {
    console.log('server running on port 3000');
})